<template>
    <div class="w-full p-2">
        <label-field>{{ label }}</label-field>
        <select class="mt-2 w-full pl-4 pr-10 py-3 leading-none rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-normal">
            <option value="" disable>Select an item</option>
            <option v-for="option in options" :value="option.value">{{ option.name }}</option>
        </select>
    </div>
</template>

<script>
    export default {
        props: [ 'label', 'options' ]
    }
</script>
