import { FC } from 'react'
import Link from 'next/link'
import type { Product } from '@commerce/types'
import { Grid } from '@components/ui'
import { ProductCard } from '@components/product'
import s from './HomeAllProductsGrid.module.css'
import { getCategoryPath, getDesignerPath } from '@lib/search'

interface Props {
  categories?: any
  brands?: any
  products?: Product[]
}

const HomeAllProductsGrid: FC<Props> = ({
  categories,
  brands,
  products = [],
}) => {
  return (
    <div className={s.root}>
      <div className={s.asideWrapper}>
        <div className={s.aside}>
          <ul className="mb-10">
            <li className="py-1 text-base font-bold tracking-wide">
              <Link href={getCategoryPath('')}>
                <a>Categories</a>
              </Link>
            </li>
            {categories.map((cat: any) => {
              if (
                cat.name === 'The Home Collection' ||
                cat.name === 'The Kitchen Collection' ||
                cat.name === 'The Laundry & Bath Collection'
              ) {
                return (
                  <li key={cat.path} className="py-1 text-accents-8 text-base">
                    <Link href={getCategoryPath(cat.path)}>
                      <a>{cat.name}</a>
                    </Link>
                  </li>
                )
              }
            })}
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <Grid layout="normal">
          {products.map((product) => (
            <ProductCard
              key={product.path}
              product={product}
              variant="simple"
              imgProps={{
                width: 480,
                height: 480,
              }}
            />
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default HomeAllProductsGrid
