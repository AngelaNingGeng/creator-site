'use client';

import { useState } from 'react';
import { Button } from '../ui/Button';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="text-center py-12 glass rounded-2xl">
        <div className="text-4xl mb-4">&#9993;</div>
        <h3 className="text-xl font-semibold text-white mb-2">消息已发送</h3>
        <p className="text-white/40">感谢你的来信，我会尽快回复。</p>
        <Button className="mt-6" variant="outline" onClick={() => setStatus('idle')}>
          发送新消息
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-2">
          姓名
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-accent-2 focus:ring-1 focus:ring-accent-2 transition-all"
          placeholder="你的名字"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">
          邮箱
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-accent-2 focus:ring-1 focus:ring-accent-2 transition-all"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-2">
          留言
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-accent-2 focus:ring-1 focus:ring-accent-2 transition-all resize-none"
          placeholder="说说你想聊什么..."
        />
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-sm">发送失败，请稍后再试。</p>
      )}

      <Button type="submit" variant="primary" className="w-full justify-center">
        {status === 'sending' ? '发送中...' : '发送消息'}
      </Button>
    </form>
  );
}
