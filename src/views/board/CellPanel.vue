<template>
    <div class="cell-panel">
        <flex-col style="height:100%">
            <flex-fill>
                <draggable
                    v-model="list"
                    :element="'div'"
                    :ghostClass="'work-card-ghost'"
                    :group="{name:'card'}"
                    style="padding-bottom:16px;height:100%"
                >
                    <div
                        class="panel card"
                        v-for="v in list"
                        :key="v.cardId"
                        @click="()=>openDetail(v)"
                    >
                        <div
                            class="delete-bar"
                            style="overflow:hidden;margin: -15px -18px -4px;"
                            @click.stop
                        >
                            <a-button
                                @click="()=>del(v.cardId)"
                                type="link"
                                size="small"
                                icon="delete"
                                style="float:right"
                            ></a-button>
                        </div>
                        {{v.content}}
                        <div style="overflow:hidden;margin:6px 0 -6px 0">
                            <div v-if="v.hour" class="hour-tag">{{v.hour}}</div>
                            <div v-if="v.endTime" class="date-tag">
                                {{
                                v.endTime.format('MM,月,DD,日').split(',').map(v=>Number(v)?Number(v):v).join('')
                                }}截止
                            </div>

                            <a-avatar
                                v-for="(v) in v.executors"
                                :key="'e-'+v.uid"
                                class="avatar-tag"
                            >{{v.realname.substring(v.realname.length-2)}}</a-avatar>
                        </div>
                    </div>
                </draggable>
            </flex-fill>

            <slot></slot>
        </flex-col>
    </div>
</template>
<script>
import draggable from "vuedraggable";

export default {
    components: {
        draggable,
    },
    props: ["rowId", "colId", "cards"],
    computed: {
        list: {
            get() {
                return this.cards.map((v) => v).sort((a, b) => a.sort - b.sort);
            },
            set(cards) {
                this.$emit("update", {
                    rowId: this.rowId,
                    colId: this.colId,
                    cards,
                });
            },
        },
    },
    methods: {
        del(cid) {
            this.$emit("del", cid);
        },
        openDetail(v) {
            this.$emit("openDetail", v);
        },
    },
};
</script>

<style lang="css" scoped>
.cell-panel {
    background: rgb(242, 243, 243);
    padding: 10px;
}

.card.panel {
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.01);
    transition: all 0.3s ease-out;
    padding: 18px;
    margin-bottom: 12px;
    word-wrap: break-word;
}
.card:hover {
    cursor: pointer;
}
.date-tag {
    float: right;
    font-size: 12px;
    line-height: 24px;
    padding: 0 8px;
    border-radius: 12px;
    margin: 6px 6px 6px 0;
    color: red;
    background: rgb(254, 233, 233);
}

.hour-tag {
    float: right;
    font-size: 12px;
    line-height: 24px;
    padding: 0 8px;
    border-radius: 12px;
    margin: 6px 6px 6px 0;
    color: #fff;
    padding: 0 4px;
    text-align: center;
    min-width: 32px;
    background: rgb(80, 199, 238);
}

.avatar-tag {
    background-color: rgb(19, 194, 194);
    vertical-align: -7px;
    float: left;
    margin: 2px 6px 2px 0;
}
</style>