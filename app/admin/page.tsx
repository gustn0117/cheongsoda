'use client';

import { useEffect, useMemo, useState } from 'react';
import { supabase, type Inquiry } from '@/app/lib/supabase';

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? '1234';
const SESSION_KEY = 'cheongsoda_admin_authed';

const STATUS_LABEL: Record<Inquiry['status'], string> = {
  new: '신규',
  contacted: '응대중',
  completed: '완료',
};

const STATUS_STYLE: Record<Inquiry['status'], string> = {
  new: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  contacted: 'bg-amber-100 text-amber-700 border-amber-200',
  completed: 'bg-navy-100 text-navy-700 border-navy-200',
};

type Filter = 'all' | Inquiry['status'];

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pwInput, setPwInput] = useState('');
  const [pwError, setPwError] = useState('');
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    if (typeof window !== 'undefined' && sessionStorage.getItem(SESSION_KEY) === '1') {
      setAuthed(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pwInput === ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, '1');
      setAuthed(true);
      setPwError('');
    } else {
      setPwError('비밀번호가 일치하지 않습니다.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setAuthed(false);
    setPwInput('');
  };

  if (!hydrated) {
    return <div className="min-h-screen" />;
  }

  if (!authed) {
    return (
      <div className="grid min-h-screen place-items-center px-5">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm rounded-3xl border border-navy-100 bg-white p-8 shadow-soft"
        >
          <div className="mb-6 text-center">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-navy-600">
              청소다 어드민
            </div>
            <h1 className="mt-2 text-2xl font-extrabold text-ink">관리자 로그인</h1>
            <p className="mt-1.5 text-sm text-ink/60">비밀번호를 입력해 주세요.</p>
          </div>
          <input
            type="password"
            inputMode="numeric"
            autoFocus
            value={pwInput}
            onChange={(e) => setPwInput(e.target.value)}
            className="w-full rounded-xl border border-navy-100 bg-white px-4 py-3.5 text-base font-semibold text-ink outline-none transition focus:border-navy-600 focus:ring-4 focus:ring-navy-600/10"
            placeholder="비밀번호"
          />
          {pwError && (
            <p className="mt-2 text-sm font-semibold text-red-600">{pwError}</p>
          )}
          <button type="submit" className="btn-primary mt-5 w-full text-base">
            로그인
          </button>
          <a
            href="/"
            className="mt-3 block text-center text-xs font-semibold text-ink/50 hover:text-ink"
          >
            ← 홈으로
          </a>
        </form>
      </div>
    );
  }

  return <Dashboard onLogout={handleLogout} />;
}

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [items, setItems] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<Filter>('all');
  const [search, setSearch] = useState('');
  const [savingId, setSavingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    const { data, error } = await supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) {
      setError('데이터를 불러오지 못했습니다. ' + error.message);
      setItems([]);
    } else {
      setItems((data ?? []) as Inquiry[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return items.filter((it) => {
      if (filter !== 'all' && it.status !== filter) return false;
      if (!q) return true;
      const hay = `${it.name} ${it.phone} ${it.region ?? ''} ${it.service ?? ''} ${it.memo ?? ''}`.toLowerCase();
      return hay.includes(q);
    });
  }, [items, filter, search]);

  const counts = useMemo(() => {
    const c = { all: items.length, new: 0, contacted: 0, completed: 0 };
    for (const it of items) c[it.status]++;
    return c;
  }, [items]);

  const updateStatus = async (id: string, next: Inquiry['status']) => {
    setSavingId(id);
    const { error } = await supabase
      .from('inquiries')
      .update({ status: next, updated_at: new Date().toISOString() })
      .eq('id', id);
    setSavingId(null);
    if (error) {
      alert('상태 변경 실패: ' + error.message);
      return;
    }
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, status: next } : it)));
  };

  const updateMemo = async (id: string, memo: string) => {
    setSavingId(id);
    const { error } = await supabase
      .from('inquiries')
      .update({ memo, updated_at: new Date().toISOString() })
      .eq('id', id);
    setSavingId(null);
    if (error) {
      alert('메모 저장 실패: ' + error.message);
      return;
    }
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, memo } : it)));
  };

  const removeItem = async (id: string) => {
    if (!confirm('이 문의를 삭제하시겠습니까? 되돌릴 수 없습니다.')) return;
    setSavingId(id);
    const { error } = await supabase.from('inquiries').delete().eq('id', id);
    setSavingId(null);
    if (error) {
      alert('삭제 실패: ' + error.message);
      return;
    }
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  return (
    <div className="container-px mx-auto max-w-6xl py-10">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-navy-600">
            Admin
          </div>
          <h1 className="mt-1 text-3xl font-extrabold text-ink sm:text-4xl">문의 관리</h1>
          <p className="mt-1.5 text-sm text-ink/60">
            견적 신청 폼으로 들어온 문의를 확인·관리합니다.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={load}
            className="rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm font-bold text-navy-700 transition hover:bg-navy-50"
          >
            새로고침
          </button>
          <button
            type="button"
            onClick={onLogout}
            className="rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm font-bold text-ink/65 transition hover:bg-mist"
          >
            로그아웃
          </button>
        </div>
      </header>

      <section className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {(['all', 'new', 'contacted', 'completed'] as const).map((k) => {
          const active = filter === k;
          const label = k === 'all' ? '전체' : STATUS_LABEL[k];
          return (
            <button
              key={k}
              type="button"
              onClick={() => setFilter(k)}
              className={`rounded-2xl border px-4 py-4 text-left transition ${
                active
                  ? 'border-navy-600 bg-navy-600 text-white shadow-glow'
                  : 'border-navy-100 bg-white text-ink hover:border-navy-300'
              }`}
            >
              <div className="text-[11px] font-bold uppercase tracking-wider opacity-75">
                {label}
              </div>
              <div className="mt-1 number-tabular text-3xl font-black">{counts[k]}</div>
            </button>
          );
        })}
      </section>

      <div className="mt-5">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="이름·번호·지역·서비스·메모로 검색"
          className="w-full rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm font-medium text-ink outline-none transition focus:border-navy-600 focus:ring-4 focus:ring-navy-600/10"
        />
      </div>

      <section className="mt-5">
        {loading ? (
          <div className="rounded-2xl border border-navy-100 bg-white p-10 text-center text-sm text-ink/60">
            불러오는 중...
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-sm font-semibold text-red-700">
            {error}
          </div>
        ) : filtered.length === 0 ? (
          <div className="rounded-2xl border border-navy-100 bg-white p-12 text-center">
            <p className="text-base font-semibold text-ink/65">
              {items.length === 0 ? '아직 접수된 문의가 없습니다.' : '조건에 맞는 문의가 없습니다.'}
            </p>
          </div>
        ) : (
          <ul className="space-y-3">
            {filtered.map((it) => (
              <InquiryRow
                key={it.id}
                item={it}
                saving={savingId === it.id}
                onStatus={(s) => updateStatus(it.id, s)}
                onMemo={(m) => updateMemo(it.id, m)}
                onDelete={() => removeItem(it.id)}
              />
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

function InquiryRow({
  item,
  saving,
  onStatus,
  onMemo,
  onDelete,
}: {
  item: Inquiry;
  saving: boolean;
  onStatus: (s: Inquiry['status']) => void;
  onMemo: (m: string) => void;
  onDelete: () => void;
}) {
  const [memoDraft, setMemoDraft] = useState(item.memo ?? '');
  const [memoOpen, setMemoOpen] = useState(false);
  const memoDirty = memoDraft !== (item.memo ?? '');

  const phoneTel = item.phone.replace(/\D/g, '');
  const created = new Date(item.created_at);
  const createdStr = `${created.getFullYear()}.${String(created.getMonth() + 1).padStart(2, '0')}.${String(created.getDate()).padStart(2, '0')} ${String(created.getHours()).padStart(2, '0')}:${String(created.getMinutes()).padStart(2, '0')}`;

  return (
    <li className="rounded-2xl border border-navy-100 bg-white p-5 shadow-soft sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-lg font-extrabold text-ink">{item.name}</span>
            <span
              className={`inline-flex rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${STATUS_STYLE[item.status]}`}
            >
              {STATUS_LABEL[item.status]}
            </span>
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <a
              href={`tel:${phoneTel}`}
              className="font-bold text-navy-700 number-tabular hover:underline"
            >
              {item.phone}
            </a>
            <span className="text-ink/35">·</span>
            <span className="text-ink/70 number-tabular">{createdStr}</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5 text-xs">
            {item.region && (
              <span className="rounded-full bg-mist px-2.5 py-1 font-semibold text-ink/70">
                {item.region}
              </span>
            )}
            {item.service && (
              <span className="rounded-full bg-mist px-2.5 py-1 font-semibold text-ink/70">
                {item.service}
              </span>
            )}
            {item.size && (
              <span className="rounded-full bg-mist px-2.5 py-1 font-semibold text-ink/70">
                {item.size}
              </span>
            )}
          </div>
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-2">
          <select
            value={item.status}
            disabled={saving}
            onChange={(e) => onStatus(e.target.value as Inquiry['status'])}
            className="rounded-lg border border-navy-100 bg-white px-3 py-2 text-sm font-bold text-ink outline-none transition focus:border-navy-600 disabled:opacity-50"
          >
            <option value="new">신규</option>
            <option value="contacted">응대중</option>
            <option value="completed">완료</option>
          </select>
          <a
            href={`tel:${phoneTel}`}
            className="rounded-lg bg-navy-600 px-3 py-2 text-sm font-bold text-white transition hover:bg-navy-700"
          >
            통화
          </a>
          <button
            type="button"
            onClick={onDelete}
            disabled={saving}
            className="rounded-lg border border-red-200 bg-white px-3 py-2 text-sm font-bold text-red-600 transition hover:bg-red-50 disabled:opacity-50"
          >
            삭제
          </button>
        </div>
      </div>

      <div className="mt-4 border-t border-navy-100 pt-4">
        <button
          type="button"
          onClick={() => setMemoOpen((v) => !v)}
          className="text-xs font-bold text-navy-600 hover:underline"
        >
          {memoOpen ? '메모 닫기' : item.memo ? `메모 보기/수정 (${item.memo.length}자)` : '메모 추가'}
        </button>
        {memoOpen && (
          <div className="mt-2.5">
            <textarea
              value={memoDraft}
              onChange={(e) => setMemoDraft(e.target.value)}
              rows={3}
              placeholder="응대 내용, 견적, 일정 등을 메모하세요."
              className="w-full rounded-xl border border-navy-100 bg-white px-3 py-2.5 text-sm text-ink outline-none transition focus:border-navy-600 focus:ring-4 focus:ring-navy-600/10"
            />
            <div className="mt-2 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  setMemoDraft(item.memo ?? '');
                  setMemoOpen(false);
                }}
                className="rounded-lg border border-navy-100 bg-white px-3 py-1.5 text-xs font-bold text-ink/65"
              >
                취소
              </button>
              <button
                type="button"
                disabled={!memoDirty || saving}
                onClick={() => onMemo(memoDraft)}
                className="rounded-lg bg-navy-600 px-3 py-1.5 text-xs font-bold text-white disabled:opacity-50"
              >
                {saving ? '저장 중...' : '저장'}
              </button>
            </div>
          </div>
        )}
      </div>
    </li>
  );
}
