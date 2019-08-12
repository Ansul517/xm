<template>
    <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>系统管理</template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="1-1">后台用户</el-menu-item>
          <el-menu-item index="1-2">角色管理</el-menu-item>
          <el-menu-item index="1-3">系统日志</el-menu-item>
		  <el-menu-item index="1-4">医院管理</el-menu-item>
		  <el-menu-item index="1-5">部门管理</el-menu-item>
		  <el-menu-item index="1-6">设备管理</el-menu-item>
		  <el-menu-item index="1-7">病例管理</el-menu-item>
		  <el-menu-item index="1-8">治疗项目管理</el-menu-item>
		  <el-menu-item index="1-9">治疗方法管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
	  <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">预约管理</span>
      </el-menu-item>
      <!-- <el-submenu index="2"> -->
        <!-- <template slot="title"><i class="el-icon-menu"></i>预约管理</template> -->
        <!-- <el-menu-item-group>
           <template slot="title">分组一</template> 
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
		  <el-menu-item index="2-3">选项3</el-menu-item>
		  <el-menu-item index="2-4">选项3</el-menu-item>
        </el-menu-item-group> -->
        <!-- <el-menu-item-group title="分组2"> -->
          
        <!-- </el-menu-item-group> -->
        <!-- <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu> -->
      <!-- </el-submenu> -->
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>治疗管理</template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="3-1">医生工作台</el-menu-item>
          <el-menu-item index="3-2">治疗师工作台</el-menu-item>
          <el-menu-item index="3-2">护士工作台</el-menu-item>
        </el-menu-item-group>
        <!-- <el-menu-item-group title="分组2"> -->
          <!-- <el-menu-item index="3-3">选项3</el-menu-item> -->
        <!-- </el-menu-item-group> -->
        <!-- <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
	  <el-submenu index="4">
        <template slot="title"><i class="el-icon-setting"></i>费用管理</template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="3-1">费用管理</el-menu-item>
          <el-menu-item index="3-2">收费流水</el-menu-item>

        </el-menu-item-group>
	  </el-submenu>
	  <el-menu-item index="5">
        <i class="el-icon-menu"></i>
        <span slot="title">会员管理</span>
      </el-menu-item>
	  <el-menu-item index="6">
        <i class="el-icon-menu"></i>
        <span slot="title">排班等级</span>
      </el-menu-item>
	  <el-menu-item index="7">
        <i class="el-icon-menu"></i>
        <span slot="title">患者管理</span>
      </el-menu-item>
	  <el-menu-item index="8">
        <i class="el-icon-menu"></i>
        <span slot="title">工作日志</span>
      </el-menu-item>
	  <el-menu-item index="9">
        <i class="el-icon-menu"></i>
        <span slot="title">数据统计</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</el-container>

</template>

<script>
import apiUrl from '../api/api';
export default {
    data() {
			return {
				// sysName:'VUEADMIN',
				// collapsed:false,
				// sysUserName: '',
				// sysUserAvatar: '',
				// form: {
				// 	name: '',
				// 	region: '',
				// 	date1: '',
				// 	date2: '',
				// 	delivery: false,
				// 	type: [],
				// 	resource: '',
				// 	desc: ''
				// }
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			onSubmit() {
				console.log('submit!');
			},
			handleopen() {
				//console.log('handleopen');
			},
			handleclose() {
				//console.log('handleclose');
			},
			handleselect: function (a, b) {
			},
			//修改密码
			changepsd:function(){
				
				
			},
			//退出登录
			logout: function () {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('account');
					_this.$router.go('/login');
				}).catch(() => {

				});


			},
			//折叠导航栏
			// collapse:function(){
			// 	this.collapsed=!this.collapsed;
			// },
			// showMenu(i,status){
			// 	this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
			// }
		},
		mounted() {
			var account = sessionStorage.getItem('account');
			if (account) {
				account = JSON.parse(account);
				this.sysUserName = account.name || '';
				this.sysUserAvatar = account.avatar || '';
			}

		}
    }
 
</script>

<style lang="scss">
    // @import '~scss_vars';
	
	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		.header {
			height: 60px;
			line-height: 60px;
			// background: $color-primary;
			color:blue;
			.userinfo {
				text-align: right;
				padding-right: 35px;
				float: right;
				.userinfo-inner {
					cursor: pointer;
					color:blue;
					img {
						width: 40px;
						height: 40px;
						border-radius: 20px;
						margin: 10px 0px 10px 10px;
						float: right;
					}
				}
			}
			.logo {
				//width:230px;
				height:60px;
				font-size: 22px;
				padding-left:20px;
				padding-right:20px;
				border-color: rgba(238,241,146,0.3);
				border-right-width: 1px;
				border-right-style: solid;
				img {
					width: 40px;
					float: left;
					margin: 10px 10px 10px 18px;
				}
				.txt {
					color:blue;
				}
			}
			.logo-width{
				width:230px;
			}
			.logo-collapse-width{
				width:60px
			}
			.tools{
				padding: 0px 23px;
				width:14px;
				height: 60px;
				line-height: 60px;
				cursor: pointer;
			}
		}
		.main {
			margin: 0 auto;
			text-align: center;
			p{
				font-size: 18px;
			}
			// display: flex;
			// background: #324057;
			// position: absolute;
			// top: 60px;
			// bottom: 0px;
			// overflow: hidden;
			// aside {
			// 	flex:0 0 230px;
			// 	width: 230px;
			// 	// position: absolute;
			// 	// top: 0px;
			// 	// bottom: 0px;
			// 	.el-menu{
			// 		height: 100%;
			// 	}
			// 	.collapsed{
			// 		width:60px;
			// 		.item{
			// 			position: relative;
			// 		}
			// 		.submenu{
			// 			position:absolute;
			// 			top:0px;
			// 			left:60px;
			// 			z-index:99999;
			// 			height:auto;
			// 			display:none;
			// 		}

				}
			}
			.menu-collapsed{
				flex:0 0 60px;
				width: 60px;
			}
			.menu-expanded{
				flex:0 0 230px;
				width: 230px;
			}
			.content-container {
				// background: #f1f2f7;
				flex:1;
				// position: absolute;
				// right: 0px;
				// top: 0px;
				// bottom: 0px;
				// left: 230px;
				overflow-y: scroll;
				padding: 20px;
				.breadcrumb-container {
					//margin-bottom: 15px;
					.title {
						width: 200px;
						float: left;
						color: #475669;
					}
					.breadcrumb-inner {
						float: right;
					}
				}
				.content-wrapper {
					background-color: bisque;
					box-sizing: border-box;
				}
			}
	
</style>>


