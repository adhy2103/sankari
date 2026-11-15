import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
export async function POST(request: Request) {
 try {
  const data = await request.json();
  const name = String(data.name || '').trim().slice(0,120);
  const email = String(data.email || '').trim().slice(0,200);
  const phone = String(data.phone || '').trim().slice(0,40);
  const subject = String(data.subject || '').trim().slice(0,200);
  const message = String(data.message || '').trim().slice(0,3000);
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({success:false,error:'Please enter your name, valid email and message.'},{status:400});
  if (!supabase) return NextResponse.json({success:false,error:'Online messaging is not configured yet. Please contact the academy through Instagram.'},{status:503});
  const { error } = await supabase.from('contact_enquiries').insert([{name,email,phone:phone || null,subject:subject || null,message}]);
  if (error) { console.error('Contact storage failed',error); return NextResponse.json({success:false,error:'Could not send your message. Please try again later.'},{status:500}); }
  return NextResponse.json({success:true});
 } catch {return NextResponse.json({success:false,error:'Unable to process your message.'},{status:400});}
}
