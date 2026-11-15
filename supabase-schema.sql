-- Execute this in your Supabase SQL editor BEFORE enabling the forms.
-- Never enable public INSERT/SELECT for personal enquiry information.
create table if not exists public.admission_enquiries (
 id bigint generated always as identity primary key,
 student_name text not null, age integer not null, gender text,
 parent_guardian_name text, phone text not null, email text not null,
 programme_category text not null, preferred_programme text not null,
 previous_experience text, preferred_batch text, message text,
 created_at timestamptz not null default now()
);
create table if not exists public.contact_enquiries (
 id bigint generated always as identity primary key,
 name text not null, email text not null, phone text, subject text,
 message text not null, created_at timestamptz not null default now()
);
alter table public.admission_enquiries enable row level security;
alter table public.contact_enquiries enable row level security;
-- Server-side service-role key bypasses RLS; do not expose it in client code.
