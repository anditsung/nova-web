<template v-slot:trigger>
    <span class="text-90">
        {{ $user->name ?? $user->email ?? __('Nova User') }}
    </span>
</template>
<template v-slot:content>
    <ul class="list-reset">
        @can('viewTelescope')
            <li>
                <a href="{{ route('nova.login') }}"
                   class="block no-underline text-gray-700 hover:bg-gray-200 p-2">
                    {{ __('Admin') }}
                </a>
            </li>
        @endcan
        @can('viewNova')
            <li>
                <a href="{{ route('nova.login') }}"
                   class="block no-underline text-gray-700 hover:bg-gray-200 p-2">
                    {{ __('Admin') }}
                </a>
            </li>
        @endcan
        <li>
            <a href="{{ route('nova.logout') }}"
               class="block no-underline text-gray-700 hover:bg-gray-200 p-2">
                {{ __('Logout') }}
            </a>
        </li>
    </ul>
</template>
