<template>
    <div>
        <StarProfile :star-id="starId"/>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import StarProfile from "@/view/components/StarProfile.vue";

    @Component({
        components: {StarProfile}
    })
    export default class StarDetailPage extends Vue {
        @Prop() starId!: number

        created() {
            this.starId = Number.parseInt((this as any).$route.params.id);
        }
    }
</script>
