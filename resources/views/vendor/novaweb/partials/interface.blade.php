<jet-dropdown>
    <template v-slot:trigger>
        <span class="text-90">
            Interface
        </span>
    </template>
    <template v-slot:content>
        <ul class="list-reset">
            <li>
                <router-link :to="{
                        name: 'erp',
                    }" class="block text-gray-700 hover:bg-gray-200 p-2">
                    ERP
                </router-link>
            </li>
        </ul>
    </template>
</jet-dropdown>
