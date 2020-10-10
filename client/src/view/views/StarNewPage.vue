<template>
    <div class="container">
        <form>
            <label class="name">
                Name:
                <input v-model="name" type="text"/>
            </label>
            <label class="distance">
                Distance:
                <input v-model="distance" type="number" class="property-input" />
                light years
                <div v-if="isNegative(distance)" class="distance-error">
                    Distance cannot be negative
                </div>
            </label>
            <label class="age">
                Age:
                <input v-model="age" type="number" class="property-input" />
                billion years
                <div v-if="isNegative(age)" class="age-error">
                    Age cannot be negative
                </div>
            </label>
            <label class="mass">
                Mass:
                <input v-model="mass" type="number" class="property-input" />
                solar masses
                <div v-if="isNegative(mass)" class="mass-error">
                    Mass cannot be negative
                </div>
            </label>
            <label class="image-url">
                Image URL:
                <input v-model="imageUrl" type="text" />
            </label>
        </form>
        <button @click="createStar">Submit</button>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {StarsService} from "@/data/StarsService";
    import Star from "@/model/Star";

    @Component
    export default class StarNewPage extends Vue {
        name = ""
        distance = 0
        age = 0
        mass = 0
        imageUrl = ""

        async createStar() {
            await StarsService.createStar(new Star(this.name, this.distance, this.age, this.mass, this.imageUrl));
            (this as any).$router.back();
        }

        isNegative = (arg: number) => {
            return arg < 0
        }
    }
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
    }

    label {
        margin: 5px;
    }

    button {
        margin: 10px;
    }

    .property-input {
        width: 50px;
    }

    .container {
        margin: auto;
        width: 500px;
        clear: both;
    }

    /*.container .input-field {*/
    /*    width: 100%;*/
    /*    clear: both;*/
    /*}*/
</style>