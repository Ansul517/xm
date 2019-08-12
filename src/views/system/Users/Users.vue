<template>
	<section>
		<i class="el-icon-back"></i>
		<el-page-header @back="goBack" content="后台用户">
		</el-page-header>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="item.account||item.userName||item.phoneName" placeholder="用户信息"></el-input>
				</el-form-item>
				<el-form-item>
					<el-select v-model="value" placeholder="请选择">
   				 		<el-option v-for="item in options"  :key="item.value"  :label="item.label"  :value="item.value">
  				 	    </el-option>
 					</el-select>
				</el-form-item>
				<el-form-item>
					<el-select v-model="value" placeholder="请选择">
   				 		<el-option v-for="item in options"  :key="item.value"  :label="item.label"  :value="item.value">
  				 	    </el-option>
 					</el-select>
				</el-form-item>
				<el-form-item>
					<el-select v-model="value" placeholder="请选择">
   				 		<el-option v-for="item in options"  :key="item.value"  :label="item.label"  :value="item.value">
  				 	    </el-option>
 					</el-select>
				</el-form-item>
				<el-form-item>
					<el-select v-model="value" placeholder="请选择">
   				 		<el-option v-for="item in options"  :key="item.value"  :label="item.label"  :value="item.value">
  				 	    </el-option>
 					</el-select>
				</el-form-item>
				<el-form-item>
					<el-select v-model="value" placeholder="请选择">
   				 		<el-option v-for="item in options"  :key="item.value"  :label="item.label"  :value="item.value">
  				 	    </el-option>
 					</el-select>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getUser">查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<template>
			<el-table :data="users" highlight-current-row v-loading="loading" style="width: 100%;">
				<el-table-column type="index" width="60">
				</el-table-column>
                <el-table-column prop="number" label="序号" width="120" sortable>
				</el-table-column>
                <el-table-column prop="account" label="登录名" width="120" sortable>
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="120" sortable>
				</el-table-column>
				<el-table-column prop="number" label="手机号" width="100"  sortable>
				</el-table-column>
				<el-table-column prop="string" label="单位" width="100" sortable>
				</el-table-column>
				<el-table-column prop="string" label="部门" width="120" sortable>
				</el-table-column>
				<el-table-column prop="string" label="科室" min-width="180" sortable>
				</el-table-column>
                <el-table-column prop="string" label="角色" min-width="180" sortable>
				</el-table-column>
                <el-table-column prop="string" label="状态" min-width="180" sortable>
				</el-table-column>
                <el-table-column prop="string" label="操作" min-width="180" sortable>
				</el-table-column>
			</el-table>
		</template>
		<!-- 分页 -->
		<el-pagination background	layout="prev, pager, next,jumper,total"	:total="1000"	@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-page="currentPage"
			:page-size="20">
		</el-pagination>
	</section>
</template>
<script>
	import { getUserList } from '../../api/api';
	//import NProgress from 'nprogress'
	export default {
		data() {
			return {
				filters: {
					name: ''
				},
				loading: false,
				users: [
				],
				options:[
					{
						value:'',
						label:'',
					},
				],
				currentPage:1,
          		tpageSize:20,
			}
		},
		methods: {
			//返回
			 goBack() {
        		console.log('go back');
      		},
			//获取用户列表
			getUser: function () {
				let para = {
					name: this.filters.name
				};
				this.loading = true;
				//NProgress.start();
				apiUrl(para).then((res) => {
					this.users = res.data.users;
					this.loading = false;
					//NProgress.done();
				});
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			}
		},
		mounted() {
			this.getUser();
		}
	};

</script>

<style scoped>

</style>