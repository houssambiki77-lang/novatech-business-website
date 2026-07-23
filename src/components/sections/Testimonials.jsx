import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Star, Quote } from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { testimonials } from '../../data/testimonials'

import 'swiper/css'
import 'swiper/css/pagination'

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-nova">
        <SectionHeading
          eyebrow="Client stories"
          title="Don't take our word for it."
          description="Feedback from the founders and product leaders we've partnered with over the last seven years."
        />

        <Reveal delay={0.15} className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.testimonial-pagination' }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="!pb-4"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name} className="h-auto">
                <div className="flex h-full flex-col rounded-2xl border border-white/8 bg-navy-800/40 p-7">
                  <Quote className="text-accent-indigo/50" size={28} />
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-300">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      loading="lazy"
                      className="h-11 w-11 rounded-full object-cover ring-1 ring-white/10"
                    />
                    <div>
                      <p className="text-sm font-semibold text-white">{t.name}</p>
                      <p className="text-xs text-ink-400">{t.role}</p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={12} className="fill-accent-cyan text-accent-cyan" />
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="testimonial-pagination mt-8 flex justify-center gap-2" />
        </Reveal>
      </div>
    </section>
  )
}
