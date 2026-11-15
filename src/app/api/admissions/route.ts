import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Required fields validation
    const { studentName, age, phone, email, category, preferredProgramme } = data

    if (!studentName || !age || !phone || !email || !category || !preferredProgramme) {
      return NextResponse.json(
        { success: false, error: 'Please fill in all mandatory fields.' },
        { status: 400 }
      )
    }

    const ageNumber = Number(age)
    if (!Number.isInteger(ageNumber) || ageNumber < 1 || ageNumber > 120) {
      return NextResponse.json({ success:false, error:'Please enter a valid age.' }, {status:400})
    }
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // Phone validation (at least 10 digits)
    const phoneDigits = phone.replace(/\D/g, '')
    if (phoneDigits.length < 10) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid phone number with at least 10 digits.' },
        { status: 400 }
      )
    }

    // Store in Supabase if configured
    if (supabase) {
      const { error: dbError } = await supabase.from('admission_enquiries').insert([
        {
          student_name: studentName,
          age: parseInt(age, 10),
          gender: data.gender || null,
          parent_guardian_name: data.parentGuardianName || null,
          phone,
          email,
          programme_category: category,
          preferred_programme: preferredProgramme,
          previous_experience: data.previousExperience || 'None',
          preferred_batch: data.preferredBatch || null,
          message: data.message || null,
          created_at: new Date().toISOString(),
        },
      ])

      if (dbError) {
        console.error('Supabase admission insertion error:', dbError)
        return NextResponse.json(
          {
            success: false,
            error: 'Failed to record your enquiry in the database. Please try again or contact us via WhatsApp.',
          },
          { status: 500 }
        )
      }
    } else {
      return NextResponse.json(
        { success: false, error: 'Online admissions are being configured. Please contact the academy directly.' },
        { status: 503 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your admission enquiry has been successfully registered.',
        enquiryId: `SKK-${Date.now().toString().slice(-6)}`,
      },
      { status: 200 }
    )
  } catch (err: any) {
    console.error('Admission API unexpected error:', err)
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred while processing your request. Please try again later.',
      },
      { status: 500 }
    )
  }
}
