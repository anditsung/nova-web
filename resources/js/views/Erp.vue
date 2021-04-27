<template>
    <div>
        <div>

            <div>
                <span>ERP Projection</span>
            </div>

            <div class="w-full flex">
                <div class="w-1/3">
                    <select-field label="Reports"
                                  v-model="report"
                                  :options="reports" />
                </div>
                <div class="w-1/3">
                    <select-field label="Plans"
                                  v-model="plan"
                                  :options="plans" />
                </div>
                <div class="w-1/3">
                    <select-field label="Reports"
                                  v-model="report"
                                  :options="reports" />
                </div>
            </div>

        </div>

        <div>

        </div>

    </div>
</template>

<script>
    export default {

        data: () => {
            return {
                plans: [],
                reports: [],

                plan: '',
                report: '',

            }
        },

    }
</script>
