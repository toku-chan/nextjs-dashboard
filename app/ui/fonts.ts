/**
 * NOTE: next/font を読み込ませることで、ビルド時に取得してきており、他の静的アセットと一緒に読み込まれてくれる
 * * そのため、パフォーマンス向上につながる
 * * google fonts を通常通り読み込むと、読み込みが完了した際にレイアウトシフトが起きてしまう
 */

import { Inter } from "next/font/google"

export const inter = Inter({ subsets: ['latin'] })