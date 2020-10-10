<template>
    <div>
        <div v-if="!!star">
            <img :src="star.imageUrl" :alt="star.name">
            <h1>{{star.name}}</h1>
            <p>Distance: {{star.distance}} light years</p>
            <p>Age: {{star.age ? star.age : "unknown" }} billion years</p>
            <p>Mass: {{star.mass ? star.mass : "unknown"}} solar masses</p>
        </div>

        <div v-else>
            <p>Error: {{this.error}}</p>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import Star from "../../model/Star";
    import {StarsService} from "@/data/StarsService";

    @Component
    export default class StarProfile extends Vue {
        @Prop() starId!: number

        star: Star | null = null
        error: Error | null = null

        async mounted() {
            try {
                this.star = await StarsService.getStarById(this.starId);
            } catch (e) {
                // error
            }
        }
    }
</script>

<style scoped>
    img {
        max-height: 30%;
        max-width: 30%;
    }
</style>