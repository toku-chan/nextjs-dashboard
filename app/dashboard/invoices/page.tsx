import Pagination from "@/app/ui/invoices/pagination";
import Search from "@/app/ui/search";
import Table from "@/app/ui/invoices/table";
import { CreateInvoice } from "@/app/ui/invoices/buttons";
import { lusitana } from "@/app/ui/fonts";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>
}) {
  /**
   * NOTE: ページコンポーネントは props として、 searchParams を受け取ることができる
   * * 今回はユーザーからの入力を元に取得ではなく、初回ロードとかなので、サーバーコンポーネント側で実行される
   * * なので、useSearchParams ではなく props を利用している
   */
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>

      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search Invoices..." />
        <CreateInvoice />
      </div>

      <Suspense fallback={<InvoicesTableSkeleton />} key={query + currentPage}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>

      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  )
}