import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from '../components/admin/AppLayout'
import Login from '../auth/Login.vue'
import { isLoggedIn } from '../auth/auth'
// import WelcomeLayout from '../components/welcome/WelcomeLayout'
import lazyLoading from './lazyLoading'

Vue.use(Router)

const demoRoutes = []
if (process.env.NODE_ENV === 'development') {
  const VueBook = require('vue-book')

  demoRoutes.push(
    VueBook.createRoute({
      requireContext: require.context('./..', true, /.demo.vue$/),
      path: '/demo',
    }),
    VueBook.createRoute({
      requireContext: require.context('./../components', true, /.vue$/),
      path: '/presentation',
    }),
  )

  Vue.use(VueBook.VueBookComponents)
}

const EmptyParentComponent = {
  template: '<router-view></router-view>',
}

const router = new Router({
  routes: [
    ...demoRoutes,
    {
      path: '*',
      redirect: { name: 'dashboard' },
    },
    {
      path: '/welcome',
      component: lazyLoading('welcome/WelcomeLayout'),
      default: true,
    },
    {
      name: 'Plans',
      path: '/plans/:action',
      component: lazyLoading('plans/PlanLayout'),
      default: true,
      props: true
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        allowAnonymous: true
      }
    },
    {
      name: 'Admin',
      path: '/admin',
      component: AppLayout,
      children: [
        {
          name: 'dashboard',
          path: 'dashboard',
          component: lazyLoading('dashboard/Dashboard'),
          default: true,
        },
        {
          name: 'clients',
          path: 'clients',
          component: lazyLoading('clients/Clients'),
          default: true,
        },
        {
          name: 'org',
          path: 'org',
          component: lazyLoading('org/Org'),
          default: true,
        },
        {
          name: 'brokers',
          path: 'brokers',
          component: lazyLoading('brokers/Brokers'),
          default: false,
        },
        {
          name: 'brokerDetail',
          path: 'broker/:id',
          component: lazyLoading('brokers/BrokerDetail'),
        },
        {
          name: 'brokerMonitor',
          path: 'brokerMonitor/:id',
          component: lazyLoading('brokers/BrokerMonitor'),
        },
        {
          name: 'plans',
          path: 'plans',
          // component: lazyLoading('plans/PlanLayout'),
          // default: true,
          // props: true
          component: EmptyParentComponent,
          children: [
            {
              name: 'add',
              path: 'add',
              component: lazyLoading('plans/PlanLayout')
            },
            {
              name: 'change',
              path: 'change',
              component: lazyLoading('plans/PlanLayout')
            },
            {
              name: 'billing',
              path: 'billing',
              component: lazyLoading('plans/PlanLayout')
            }
          ]
        },
        {
          name: 'topics',
          path: 'topics',
          component: lazyLoading('topics/Topics'),
          default: false,
        },
        {
          name: 'topicDetail',
          path: 'topic/:id',
          component: lazyLoading('topics/TopicDetail'),
        },
        {
          name: 'functions',
          path: 'functions',
          component: EmptyParentComponent,
          default: false,
          children: [
            {
              name: 'functionAdd',
              path: 'add',
              component: lazyLoading('functions/FunctionCreate')
            },
            {
              name: 'functionView',
              path: 'view',
              component: lazyLoading('functions/Functions'),
            },
            {
              name: 'functionDetail',
              path: 'view/:id',
              component: lazyLoading('functions/FunctionDetail'),
            },
            {
              name: 'functionUpdate',
              path: 'add/:id',
              component: lazyLoading('functions/FunctionCreate'),
            },
          ]
        },
        {
          name: 'sinks',
          path: 'sinks',
          component: EmptyParentComponent,
          default: false,
          children: [
            {
              name: 'sinkAdd',
              path: 'add',
              component: lazyLoading('sinks/SinkCreate')
            },
            {
              name: 'sinkView',
              path: 'view',
              component: lazyLoading('sinks/Sinks'),
            },
            {
              name: 'sinkDetail',
              path: 'view/:id',
              component: lazyLoading('sinks/SinkDetail'),
            },
            {
              name: 'sinkUpdate',
              path: 'add/:id',
              component: lazyLoading('sinks/SinkCreate'),
            },
          ]
        },
        {
          name: 'sources',
          path: 'sources',
          component: EmptyParentComponent,
          default: false,
          children: [
            {
              name: 'sourceAdd',
              path: 'add',
              component: lazyLoading('sources/SourceCreate')
            },
            {
              name: 'sourceView',
              path: 'view',
              component: lazyLoading('sources/Sources'),
            },
            {
              name: 'sourceDetail',
              path: 'view/:id',
              component: lazyLoading('sources/SourceDetail'),
            },
            {
              name: 'sourceUpdate',
              path: 'add/:id',
              component: lazyLoading('sources/SourceCreate'),
            },
          ]
        },
        {
          name: 'namespaces',
          path: 'namespaces',
          component: lazyLoading('namespaces/Namespaces'),
          default: false,
        },
        {
          name: 'namespaceDetail',
          path: 'namespace/:id',
          component: lazyLoading('namespaces/NamespaceDetail'),
        },
        {
          name: 'clusters',
          path: 'clusters',
          component: lazyLoading('clusters/Clusters'),
          default: false,
        },
        {
          name: 'clusterDetail',
          path: 'cluster/:id',
          component: lazyLoading('clusters/ClusterDetail'),
        },
        {
          name: 'clusterMonitor',
          path: 'clusterMonitor/:id',
          component: lazyLoading('clusters/ClusterMonitor'),
        },
        {
          name: 'credentials',
          path: 'credentials',
          component: lazyLoading('credentials/Credentials'),
          default: false,
        },
        {
          name: 'code',
          path: 'code',
          component: EmptyParentComponent,
          children: [
            {
              name: 'java',
              path: 'java',
              component: lazyLoading('code-samples/Java/JavaSamples')
            },
            {
              name: 'python',
              path: 'python',
              component: lazyLoading('code-samples/Python/PythonSamples')
            },
            {
              name: 'nodejs',
              path: 'nodejs',
              component: lazyLoading('code-samples/Nodejs/NodejsSamples')
            },
            {
              name: 'golang',
              path: 'golang',
              component: lazyLoading('code-samples/Golang/GolangSamples')
            },
            {
              name: 'httpclients',
              path: 'httpclients',
              component: lazyLoading('code-samples/HttpClients/HttpClientsSamples')
            },
            {
              name: 'wspython',
              path: 'wspython',
              component: lazyLoading('code-samples/WsPython/WsPythonSamples')
            },

          ]
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (!to.meta.allowAnonymous && !isLoggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }
  else {
    next()
  }  
})

export default router;
