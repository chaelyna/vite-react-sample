import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import products from '../data/products.js';
import ProductCard from './ProductCard.jsx';

export default function ProductCarousel() {
    return (
        <div className="mySwiper">
            <Swiper
                modules={[Pagination]}
                spaceBetween={30}
                pagination={{ clickable: true }}
                slidesPerView={4}
                slidesPerGroupSkip={4}
                breakpoints={{
                    0: { slidesPerView: 1, slidesPerGroupSkip: 1 },
                    640: { slidesPerView: 2, slidesPerGroupSkip: 2 },
                    1024: { slidesPerView: 3, slidesPerGroupSkip: 3 },
                    1280: { slidesPerView: 4, slidesPerGroupSkip: 4 },
                }}
            >
                {products.map(p => (
                    <SwiperSlide key={p.id}>
                        <ProductCard product={p} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
