"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[8261],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7070:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"\u5feb\u901f\u5b89\u88c5",hide_title:!0,sidebar_position:1},s=void 0,u={unversionedId:"installation/quick-install",id:"installation/quick-install",title:"\u5feb\u901f\u5b89\u88c5",description:"\u5feb\u901f\u5b89\u88c5",source:"@site/docs/installation/quick-install.md",sourceDirName:"installation",slug:"/installation/quick-install",permalink:"/kubegems.io/docs/installation/quick-install",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u5feb\u901f\u5b89\u88c5",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"AI\u6a21\u578b\u7ba1\u7406",permalink:"/kubegems.io/docs/concepts/feature/ai-module"},next:{title:"Kubeadm\uff08\u96c6\u7fa4\u6a21\u5f0f\uff09",permalink:"/kubegems.io/docs/installation/kubernetes-installation/kubeadm"}},p={},c=[{value:"\u5feb\u901f\u5b89\u88c5",id:"\u5feb\u901f\u5b89\u88c5",level:2},{value:"Installation",id:"installation",level:3},{value:"Installer",id:"installer",level:3},{value:"\u8bbf\u95ee\u754c\u9762",id:"\u8bbf\u95ee\u754c\u9762",level:3},{value:"\u9644\u5f55",id:"\u9644\u5f55",level:3},{value:"\u7cfb\u7edf\u547d\u540d\u7a7a\u95f4",id:"\u7cfb\u7edf\u547d\u540d\u7a7a\u95f4",level:4}],m={toc:c};function d(e){var t=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u5feb\u901f\u5b89\u88c5"},"\u5feb\u901f\u5b89\u88c5"),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"KubeGems Installer Operator"),"\u662f\u4e00\u4e2a\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"https://sdk.operatorframework.io/"},"Operator SDK")," \u6784\u5efa\u7684Ansible Kubernetes\u63a7\u5236\u5668\u3002\u901a\u8fc7CRD\u4e2d\u7684\u5b9a\u4e49\u7684\u5b57\u6bb5\u5bf9Ansible\u8fdb\u884c\u53d8\u91cf\u4f20\u9012\u3002Installer Operator\u7684\u8fd0\u884c\u9700\u8981\u5177\u5907\u96c6\u7fa4\u7ba1\u7406\u5458\u7684RBAC\u6743\u9650\uff0c\u6240\u4ee5\u5728\u90e8\u7f72\u524d\u9700\u8981\u8054\u7cfb\u60a8\u7684\u96c6\u7fa4\u7ba1\u7406\u5458\uff0c\u4ee5\u4fdd\u8bc1\u6709\u8db3\u591f\u7684\u6388\u6743\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(13855).Z,width:"951",height:"517"})),(0,l.kt)("h3",{id:"installation"},"Installation"),(0,l.kt)("p",null,"1.\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5KubeGems Installer\u63a7\u5236\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -n kubegems-installer -f https://github.com/kubegems/installer-operator/releases/download/v1.20.0-beta.0/centrol.yaml\n")),(0,l.kt)("p",null,"2.\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u9a8c\u8bc1\u90e8\u7f72\u7ed3\u679c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n kubegems-installer\n\nNAME                                           READY   STATUS    RESTARTS   AGE     IP                NODE              NOMINATED NODE   READINESS GATES\nkubegems-installer-manager-8649bd7fcb-j286g    2/2     Running   0          15m     192.169.15.92     k8s-master3-123   <none>           <none>\n")),(0,l.kt)("h3",{id:"installer"},"Installer"),(0,l.kt)("p",null,"1.\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u63d0\u4ea4 installer \u8d44\u6e90"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://github.com/kubegems/installer-operator/releases/download/v1.20.0-beta.0/centrol.installer.yaml\n")),(0,l.kt)("p",null,"2.\u89c2\u5bdfInstaller\u90e8\u7f72\u72b6\u6001"),(0,l.kt)("p",null,"\u5728\u63d0\u4ea4CR\u540e\uff0c\u53ef\u662f\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u89c2\u5bdfinstaller\u7684\u65e5\u5fd7\u8f93\u51fa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs -n kubegems-installer  <installer-operator\u5bb9\u5668> -c manager -f\n")),(0,l.kt)("p",null,"\u6307\u5bfc\u51fa\u73b0\u7c7b\u4f3c\u4e0b\u9762\u65e5\u5fd7\uff0c\u5219\u8868\u793a\u521d\u59cb\u5316\u5b8c\u6210\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(63650).Z,width:"3346",height:"1792"})),(0,l.kt)("p",null,"3.\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u90e8\u7f72\u9a8c\u8bc1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl get pod --all-namespaces |grep gems\n")),(0,l.kt)("p",null,"KubeGems\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u4f1a\u8fd0\u884c\u5982\u4e0b\u622a\u56fe\u4fe1\u606f\u7684\u5bb9\u5668\n",(0,l.kt)("img",{loading:"lazy",src:n(51690).Z,width:"3338",height:"1520"})),(0,l.kt)("h3",{id:"\u8bbf\u95ee\u754c\u9762"},"\u8bbf\u95ee\u754c\u9762"),(0,l.kt)("p",null,"\u5f53\u90e8\u7f72\u6210\u529f\u540e\uff0c\u60a8\u53ef\u4ee5\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"gemcloud-gateway-system"),"\u547d\u540d\u7a7a\u95f4\u4e0b\u627e\u5230\u4e00\u4e2a\u540d\u53eb ",(0,l.kt)("inlineCode",{parentName:"p"},"deftault-gateway")," \u7684\u7f51\u5173\uff0c\u5b83\u7531 KubeGems \u81ea\u52a8\u521b\u5efa\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n gemcloud-gateway-system\nNAME                                                         READY   STATUS    RESTARTS   AGE\ndefault-gateway-5bcb8bc59c-2fcq4                             1/1     Running   0          7d7h\nnginx-ingress-operator-controller-manager-56bcddd997-kbjqw   2/2     Running   0          7d7h\n\nkubectl get pod -n gemcloud-gateway-system\nNAME                                                        TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)                      AGE\ndefault-gateway                                             NodePort    10.102.206.7    <none>        80:32717/TCP,443:30557/TCP   7d7h\nnginx-ingress-operator-controller-manager-metrics-service   ClusterIP   10.96.47.121    <none>        8443/TCP                     7d8h\nnginx-ingress-operator-metrics                              ClusterIP   10.111.159.25   <none>        9113/TCP                     7d8h\n")),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728\u521b\u5efa\u4e00\u6761ingress \u89c4\u5219\u5c06 kubegems dashboard \u670d\u52a1\u66b4\u9732\u51fa\u6765\uff0c\u53c2\u8003\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: extensions/v1beta1\nkind: Ingress\nmetadata:\n  annotations:\n    nginx.org/proxy-buffering: "false"\n    nginx.org/websocket-services: gems-dashboard\n  name: gems-dashboard\n  namespace: gemcloud-system\nspec:\n  rules:\n  - host: console.kubegems.io\n    http:\n      paths:\n      - backend:\n          serviceName: gems-dashboard\n          servicePort: 8000\n        path: /\n        pathType: ImplementationSpecific\n')),(0,l.kt)("p",null,"\u6b64\u65f6\uff0c\u60a8\u9700\u8981\u5c06\u57df\u540d",(0,l.kt)("inlineCode",{parentName:"p"},"console.kubegems.io"),"\u89e3\u6790\u5230 Kubernetes \u96c6\u7fa4\u5185\u4efb\u610f\u8282\u70b9\u540e\uff0c\u5373\u53ef\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"http://console.kubegems.io:<NodePort>")," \u8bbf\u95ee\u9875\u9762\u3002"),(0,l.kt)("h3",{id:"\u9644\u5f55"},"\u9644\u5f55"),(0,l.kt)("h4",{id:"\u7cfb\u7edf\u547d\u540d\u7a7a\u95f4"},"\u7cfb\u7edf\u547d\u540d\u7a7a\u95f4"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u547d\u540d\u7a7a\u95f4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7528\u9014"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cert-manager"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bc1\u4e66\u7ba1\u7406\u6240\u5728\u7a7a\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kubegems-installer"),(0,l.kt)("td",{parentName:"tr",align:null},"KubeGems installer \u6240\u5728\u7a7a\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gemcloud-system"),(0,l.kt)("td",{parentName:"tr",align:null},"KubeGems\u7cfb\u7edf\u670d\u52a1\u6240\u5728\u7a7a\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gemcloud-monitoring-system"),(0,l.kt)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u544a\u8b66\u670d\u52a1\u6240\u5728\u7a7a\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gemcloud-logging-system"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u670d\u52a1\u6240\u5728\u7a7a\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gemcloud-gateway-system"),(0,l.kt)("td",{parentName:"tr",align:null},"\u79df\u6237\u7f51\u5173\u6240\u5728\u7a7a\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gemcloud-workflow-system"),(0,l.kt)("td",{parentName:"tr",align:null},"ci/cd\u5f15\u64ce\u6240\u5728\u7a7a\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"observability"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u89c2\u5bdf\u7ec4\u4ef6\u6240\u5728\u7a7a\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"istio-system"),(0,l.kt)("td",{parentName:"tr",align:null},"istio \u7ec4\u4ef6\u6240\u5728\u7a7a\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"local-path-storage"),(0,l.kt)("td",{parentName:"tr",align:null},"host pv\u670d\u52a1\u6240\u5728\u7a7a\u95f4")))))}d.isMDXComponent=!0},63650:function(e,t,n){t.Z=n.p+"assets/images/installer-complete-b651db830db29082a6edfde5b836541c.jpg"},13855:function(e,t,n){t.Z=n.p+"assets/images/installer-76a31a5c5498a6dab57bcb5256c287a5.jpg"},51690:function(e,t,n){t.Z=n.p+"assets/images/service-complete-1ba22d933c69a3752a47174480c55783.jpg"}}]);