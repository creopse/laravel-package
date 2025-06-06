@extends('app')

@section('title', __('creopse::auth.email_verification'))

@section('content')
    <section class="flex items-center justify-center py-12 h-screen w-screen bg-slate-300">
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {{ $alreadyVerified ? __('creopse::auth.email_already_verified') : __('creopse::auth.email_verified_successfully') }}
                </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {{ $alreadyVerified ? __('creopse::auth.email_already_verified_text') : __('creopse::auth.email_verified_successfully_text') }}
            </p>
            <a href="{{ route('home.index') }}" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {{ Lang::get('Continue') }}
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </section>
@endsection
