import { MenuItem } from '@/types/menu'

const menu: Array<MenuItem> = [
  {
    icon: 'home',
    key: 'home',
    label: '首页',
    value: 'Home',
  },
  {
    icon: 'el-icon-menu',
    key: 'res',
    label: '资源管理',
    children: [
      {
        key: 'res_app',
        label: '应用管理',
        value: 'ResourceApplicationList',
      },
      {
        key: 'res_menu',
        label: '应用资源管理',
        value: 'ResourceMenuList',
      },
      {
        key: 'res_api',
        label: '接口资源管理',
        value: 'ResourceApiList',
      },
    ],
  },
  {
    icon: 'el-icon-view',
    key: 'acc',
    label: '用户权限管理',
    children: [
      {
        key: 'acc_acc',
        label: '用户管理',
        value: 'AccountManagementList',
      },
      {
        key: 'acc_am',
        label: '应用操作员管理',
        value: 'AccountApplicationManagementList',
      },
      {
        key: 'acc_cln',
        label: '用户组管理',
        value: 'AccountClassificationList',
      },
      {
        key: 'acc_clna',
        label: '属性组管理',
        value: 'AccountPropList',
      },
      {
        key: 'acc_org',
        label: '组织机构管理',
        value: 'AccountOrganizationList',
      },
      {
        key: 'acc_sec',
        label: '二级授权管理',
        value: 'AccountSecondList',
      },
    ],
  },
  {
    icon: 'el-icon-connection',
    key: 'sty',
    label: '权限策略管理',
    children: [
      {
        key: 'sty_acc',
        label: '用户策略管理',
        value: 'StrategyAcccountList',
      },
      {
        key: 'sty_ser',
        label: '服务策略管理',
        value: 'StrategyServiceList',
      },
      {
        key: 'sty_cha',
        label: '角色管理',
        value: 'StrategyCharacterList',
      },
      {
        key: 'sty_cgp',
        label: '角色组管理',
        value: 'StrategyCharacterGroupList',
      },
    ],
  },
  {
    label: '日志管理',
    key: 'log',
    icon: 'el-icon-time',
    children: [
      {
        label: '操作日志',
        key: 'log_opt',
        value: 'LogOperationList',
      },
    ],
  },
]

export default menu