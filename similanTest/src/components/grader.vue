<template>
    <div class="container-fluid bg-body-secondary border border-primary rounded mt-5" style="width:500px;height:auto">
        <form class="form-horizontal text-center">
            <h1 >คำนวนเกรด</h1>
            <label class="control-label">ชื่อ-นามสกุล :</label>
            <input v-model="name" class="form-control " type="text"/>
            <label class="control-label" >รหัสนักศึกษา :</label>
            <input v-model="studentId" class="form-control " type="text" />
            <label class="control-label">กรอกคะแนนของคุณ :</label>
            <input v-model="score" class="form-control my-3" type="number" />
        </form>
        <div class="form-horizontal">
            <p>ชื่อและนามสกุลของคุณ : {{ name }}</p>
            <p>รหัสนักศึกษาของคุณ : {{ studentId }}</p>
            <p>คะแนนของคุณ : {{ score }}</p>
            <p>เกรดของคุณ : {{ grading }}</p>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
const name = ref('')
const score = ref(0)
const studentId = ref('')
const grading = ref('')

watch(score, (newVal,oldVal) =>{
    console.log(score.value)
    if (score.value < 60){
        grading.value = 'F'
    }
    else if (score.value >= 60 && score.value < 70){
        grading.value = 'D'
    }
    else if (score.value >= 70 && score.value < 80){
        grading.value = 'C'
    }
    else if (score.value >= 80 && score.value < 90){
        grading.value = 'B'
    }
    else if (score.value >= 90 && score.value <= 100){
        grading.value = 'A'
    }
})
</script>

<style scoped>

</style>