<template>
    <div class="relative">
        <div class="flex items-center" @click="open = ! open">
            <slot name="trigger"></slot>

            <svg
                class="ml-2"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="6"
                viewBox="0 0 10 6"
            >
                <path
                    :fill="activeIconColor"
                    d="M8.292893.292893c.390525-.390524 1.023689-.390524 1.414214 0 .390524.390525.390524 1.023689 0 1.414214l-4 4c-.390525.390524-1.023689.390524-1.414214 0l-4-4c-.390524-.390525-.390524-1.023689 0-1.414214.390525-.390524 1.023689-.390524 1.414214 0L5 3.585786 8.292893.292893z"
                />
            </svg>
        </div>

        <div v-show="open" class="fixed inset-0 z-40" @click="open = false"></div>

        <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95">
            <div v-show="open"
                 class="absolute z-50 mt-2 rounded-md shadow-lg"
                 :class="[widthClass, alignmentClasses]"
                 style="display: none;"
                 @click="open = false">
                <div class="rounded-md border border-60 ring-opacity-5" :class="contentClasses">
                    <slot name="content"></slot>
                </div>
            </div>
        </transition>

    </div>
</template>

<script>
    export default {
        props: {
            align: {
                default: 'right'
            },
            width: {
                default: '48'
            },
            contentClasses: {
                default: () => ['py-1', 'bg-white']
            },
            active: {
                type: Boolean,
                default: false,
            }
        },

        data: () => {
            return {
                open: false
            }
        },

        created() {
            document.addEventListener('keydown', this.closeOnEscape)
        },

        destroyed() {
            document.removeEventListener('keydown', this.closeOnEscape)
        },

        methods: {
            closeOnEscape(event) {
                if (this.open && event.keyCode === 27) {
                    this.open = false
                }
            }
        },

        computed: {
            widthClass() {
                return {
                    '48': 'w-48',
                }[this.width.toString()]
            },

            alignmentClasses() {
                if (this.align === 'left') {
                    return 'origin-top-left left-0'
                } else if (this.align === 'right') {
                    return 'origin-top-right right-0'
                } else {
                    return 'origin-top'
                }
            },

            activeIconColor() {
                return this.active ? 'var(--white)' : 'var(--90)'
            },
        }
    }
</script>
