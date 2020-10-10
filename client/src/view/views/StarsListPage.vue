<template>
    <div>
        <h1>Stars list</h1>
        <ul>
            <li class="stars-list__item"
                v-for="star of starsList"
                :key="star.id"
            >
                <button @click="navigateToStar(star)">{{star.name}}</button>
            </li>
        </ul>
        <button @click="navigateToNew">
            Add star
        </button>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import {StarsService} from "@/data/StarsService";
    import Star from "@/model/Star"; // @ is an alias to /src

    @Component
    export default class StarsListPage extends Vue {
        starsList: Star[] = []
        error: Error | null = null

        async mounted() {
            try {
                this.starsList = await StarsService.getList()
            } catch (e) {
                this.error = e
            }
        }

        navigateToStar(star: Star) {
            this.$router.push({path: `/stars/${star.id}`})
        }

        navigateToNew() {
            ((this as any).$router).push({ path: '/stars/new' })
        }
    }
</script>

<style>
    li {
        list-style: none;
        margin: 10px;
    }

    ul {
        padding-left: 0;
    }
</style>