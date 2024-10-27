/**
 * NOTE: Layoutの良いところ
 * * 遷移した時に、pageの表示部分だけ変更され、、サイドナビは再描画されない。
 * * このことを「部分レンダリング = partial rendering」という。
 */

import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  )
}
