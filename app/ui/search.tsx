'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  console.log("searchParams", searchParams)

  // NOTE: 現在のパスを取得（ = /dashboard/invoices）
  const pathname = usePathname();
  console.log("pathname", pathname);

  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);

    if(term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }

    // NOTE: params.toString()が入力された内容をURLのクエリに変換している（= ?query=〇〇）
    console.log("params", params.toString())

    // NOTE: replace()によってURLを更新している
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()} // NOTE: URLのqueryにセットされている値を検索枠に入れる
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
