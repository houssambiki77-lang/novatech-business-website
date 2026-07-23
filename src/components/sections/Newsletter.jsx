import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import Reveal from '../ui/Reveal'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.includes('@')) return
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 900)
  }

  return (
    <section className="py-12">
      <div className="container-nova">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-navy-800/40 px-6 py-12 sm:px-14">
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent-indigo/25 blur-[100px]"
              aria-hidden="true"
            />
            <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
              <div className="max-w-md">
                <h3 className="font-display text-2xl font-semibold text-white">Product & engineering notes.</h3>
                <p className="mt-2 text-sm text-ink-400">
                  One email a month — real lessons from projects we've shipped, no fluff.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full flex-1 rounded-full border border-white/10 bg-navy-900/60 px-5 py-3.5 text-sm text-white placeholder:text-ink-400 focus:border-accent-cyan/50"
                />
                <button type="submit" className="btn-primary shrink-0 !px-5" disabled={status === 'submitting'}>
                  {status === 'success' ? (
                    <>
                      <CheckCircle2 size={16} /> Subscribed
                    </>
                  ) : (
                    <>
                      Subscribe <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
