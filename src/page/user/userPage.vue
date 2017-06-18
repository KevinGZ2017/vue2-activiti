<template>
    <div>
        <div class="container pad_t150">
            <div class="row">
                <div class="center-block">

                    <Row type="flex" justify="space-around" align="middle">
                        <Col span="22">
                            <Button type="ghost" icon="android-add" @click="add">添加</Button>&nbsp;&nbsp;
                            <Button type="ghost" icon="edit" @click="edit">修改</Button>&nbsp;&nbsp;
                            <Button type="ghost" icon="information" @click="view">查看</Button>&nbsp;&nbsp;
                            <Button type="ghost" icon="android-remove" @click="remove">删除</Button>&nbsp;&nbsp;
                            <Button type="ghost" icon="refresh" @click="init">刷新</Button>&nbsp;&nbsp;
                        </Col>
                    </Row>

                    <br>
                    <Row type="flex" justify="center" align="middle">
                        <Col span="22">
                        <Table :columns="columns" :data="getUserPage.rows" @on-selection-change="changeSelectedRow"></Table>
                        </Col>
                    </Row>

                    <br>
                    <Row type="flex" justify="space-around" align="middle">
                        <Col span="22">
                        <Page :total="getUserPage.totalCount" :page-size="conditions.pageSize" :current="conditions.currentPage"
                              @on-change="changePage" @on-page-size-change="changePageSize" show-sizer show-total></Page>
                        </Col>
                    </Row>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '名称',
                        key: 'name'
                    },
                    {
                        title: '性别',
                        key: 'sex'
                    },
                    {
                        title: '邮箱',
                        key: 'email'
                    },
                    {
                        title: '修改时间',
                        key: 'updateDate'
                    }
                ],
                conditions: {
                    currentPage: 1,
                    pageSize: 10
                }
            }
        },
        computed: {
            ...mapGetters({
                getUserPage: 'getUserPage'
            })
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.conditions = {
                    currentPage: 1,
                    pageSize: 10
                }
                this.getDataPage()
            },
            changePageSize(val) {
                this.conditions.pageSize = val
                this.getDataPage()
            },
            changePage(val) {
                this.conditions.currentPage = val
                this.getDataPage()
            },
            getDataPage() {
                this.$store.dispatch('userPage', this.conditions);
            },
            changeSelectedRow() {

            },
            add() {

            },
            edit() {

            },
            view() {

            },
            remove() {

            }
        },

    }
</script>