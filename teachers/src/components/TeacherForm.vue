<template>
    <section>
        <h3>Añadir profesor</h3>
        <div>
            <label for="">Nombre</label>
            <input type="text" v-model="teacher.name">
        </div>
        <div>
            <label for="">Apellidos</label>
            <input type="text" v-model="teacher.lastName">
        </div>
        <div>
            <label for="">DNI</label>
            <input type="text" v-model="teacher.dni">
        </div>
        <div>
            <label for="">Materias</label>
            <input type="text" v-model="subject">
            <button @click="handleSubject">Agregar</button>
            <div>
                <ul>
                    <li v-for="(elm, index) in teacher.subjects" :key="index">
                    {{ elm }}
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <label for="">Documentos entregados</label>
            <input type="checkbox" v-model="teacher.doc">
            <button @click="addTeacher">Agregar</button>
        </div>

    </section>

    <section>
        <h3>Listado de profesores</h3>
        <table>
            <tr>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>DNI</th>
                <th>Materias</th>
                <th>Documentacion entregada</th>
            </tr>
            <tr v-for="elm in teachers" :key="elm.dni">
                <td>{{ elm.name }}</td>
                <td>{{ elm.lastName }}</td>
                <td>{{ elm.dni }}</td>
                <td>
                    <ul>
                        <li v-for="(item, index) in elm.subjects" :key="index">
                            {{ item }}
                        </li>
                    </ul>
                </td>
                <td v-if="elm.doc">
                    Entregada
                </td>
                <td v-else>
                    No entregada
                </td>

            </tr>
        </table>
    </section>
</template>

<script setup>
    import {ref} from 'vue'

    let teacher = ref({
        name:'',
        lastName:'',
        dni:'',
        subjects:[],
        doc: false,
    })

    let teachers = ref([])
    let subject = ref('')

    const handleSubject = () => {
        teacher.value.subjects.push(subject.value);
        subject.value = ''
    }

    const addTeacher = () =>{
       
        teachers.value.push({
            name: teacher.value.name,
            lastName: teacher.value.lastName,
            dni: teacher.value.dni,
            subjects: teacher.value.subjects,
            doc: teacher.value.doc,
        })
        teacher.value.name = ""
        teacher.value.lastName = ""
        teacher.value.dni = ""
        teacher.value.subjects = []
        teacher.value.doc = false


    }


</script>

<style scoped>
</style>