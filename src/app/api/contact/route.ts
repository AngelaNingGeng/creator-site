import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "所有字段都是必填的" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "邮箱格式不正确" },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: "留言至少需要10个字符" },
        { status: 400 }
      );
    }

    // In production, integrate with email service (Resend, SendGrid, etc.)
    // or write to a database. For now, log and return success.
    console.log("Contact form submission:", { name, email, message });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "服务器错误，请稍后再试" },
      { status: 500 }
    );
  }
}
