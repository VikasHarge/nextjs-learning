import LinkTo from '@/components/LinkTo'
import { useRouter } from 'next/router'
import React from 'react'

const Review = () => {

    const router = useRouter()

    const productId = router.query?.productId
    const reviewId = router.query?.reviewId

  return (
    <div>
        <h1>Review no {reviewId} of product no {productId}</h1>
        <LinkTo path={`/products/${productId}`} title='Back' />
        <div>
        </div>
    </div>
  )
} 

export default Review