<template>
    <div class="container-fluid bg-body-secondary border border-primary rounded mt-5" style="width:550px">
        <div class="form-horizontal text-center">
        <p class="fw-bold text-uppercase mt-3">first number :</p>
        <input class="form-control" type="number" v-model="num1"/>
        <p class="fw-bold text-uppercase mt-1">second number :</p>
        <input class="form-control" type="number" v-model="num2"/>
        <p class="fw-bold text-uppercase mt-1">Enter operation mode</p>
        <p>[ 1: + (plus), 2: - (minus), 3: * (multiply), 4: / (divide), 5: % (modulus) ] :</p>
        <input class="form-control" type="text" v-model="mode"/>
        <p class="fw-bold text-uppercase mt-1">result : {{ result }}</p>
        </div>
    </div>
    
</template>

<script setup>
import {ref,watch} from 'vue'
const num1 = ref(0)
const num2 = ref(0)
const mode = ref('')
const result = ref(0)

watch(mode,(newVal,oldVal) => {
    if (mode.value === '+'){
        result.value = (num1.value + num2.value)
    }
    else if (mode.value === '-'){
        result.value = (num1.value - num2.value)
    }
    else if (mode.value === '*'){
        result.value = num1.value * num2.value
    }
    else if (mode.value === '/'){
        result.value = num1.value / num2.value
    }
    else if (mode.value === '%'){
        result.value = num1.value % num2.value
    }
})
</script>

<style lang="scss" scoped>

</style>