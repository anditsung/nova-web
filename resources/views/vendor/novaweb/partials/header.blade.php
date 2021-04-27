<div class="bg-white border-b border-gray-100">
    <!-- Primary Navigation Menu -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">

            <div class="flex">
                <!-- logo -->
                <div class="flex-shrink-0 flex items-center">
                    <router-link :to="{
                            name: 'home',
                        }" class="text-justify text-2xl tracking-widest no-underline dim">
                        {{ config('app.name') }}
                    </router-link>
                </div>
            </div>

            <div class="hidden sm:flex sm:items-center sm:ml-6 space-x-4">

                @include('vendor.novaweb.partials.interface')

                @auth
                    <jet-dropdown>
                        @include('vendor.novaweb.partials.user')
                    </jet-dropdown>
                @else
                    <ul class="list-reset">
                        <li>
                            <a href="{{ route('nova.login') }}" class="block no-underline text-90 hover:bg-30 p-3">
                                {{ __('Log In') }}
                            </a>
                        </li>
                    </ul>
                @endauth
            </div>

        </div>
    </div>

    <!-- Responsive Navigation Menu -->
    <div class="sm:hidden">
    </div>
</div>
