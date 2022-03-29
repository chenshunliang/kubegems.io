"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[1048],{58673:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"sidecarless-mesh","metadata":{"permalink":"/kubegems.io/blog/sidecarless-mesh","source":"@site/blog/sidecarless-mesh/2022-03-22-sidecarless-mesh.md","title":"sidecarless-mesh\u65b9\u6848\u53ef\u884c\u6027\u9a8c\u8bc1","description":"\u4f20\u7edf\u65b9\u6848\u4e0esidecarless\u65b9\u6848\u5bf9\u6bd4","date":"2022-03-22T00:00:00.000Z","formattedDate":"2022\u5e743\u670822\u65e5","tags":[{"label":"ebpf","permalink":"/kubegems.io/blog/tags/ebpf"},{"label":"cilium","permalink":"/kubegems.io/blog/tags/cilium"},{"label":"sidecarless","permalink":"/kubegems.io/blog/tags/sidecarless"}],"readingTime":3.39,"truncated":false,"authors":[{"name":"zhanghe","title":"developer@kubegems","url":"https://github.com/zhanghe9702","imageURL":"https://github.com/zhanghe9702.png","key":"zhanghe"}],"frontMatter":{"slug":"sidecarless-mesh","title":"sidecarless-mesh\u65b9\u6848\u53ef\u884c\u6027\u9a8c\u8bc1","authors":["zhanghe"],"tags":["ebpf","cilium","sidecarless"]},"nextItem":{"title":"\u767b\u9646\u548c\u8ba4\u8bc1\u8bbe\u8ba1","permalink":"/kubegems.io/blog/kubegems-auth"}},"content":"## \u4f20\u7edf\u65b9\u6848\u4e0esidecarless\u65b9\u6848\u5bf9\u6bd4  \\n\\n<img src=\\"/img/docs/sidecarless-mesh.webp\\" width=\\"100%\\" />\\n\\n## kind \u96c6\u7fa4\u642d\u5efa\u6b65\u9aa4\\n   \u5b89\u88c5kind\u8bf7\u53c2\u8003[kind install](https://kind.sigs.k8s.io/docs/user/quick-start/#installing-from-release-binaries),\u5047\u5b9a`GOPATH=$HOME/go`\\n# \u6784\u5efakubegems\u9002\u914d\u7684k8s node-image\\n  \\n   - `mkdir $GOPATH/src/k8s.io && cd $GOPATH/src/k8s.io`\\n   - `git clone https://github.com/kubernetes/kubernets`\\n   - `git check -b kubegems_test v1.21.1`\\n   - `kind build node-image`  \\n   \u68c0\u67e5\u662f\u5426\u6210\u529f\u6784\u5efa\u955c\u50cf  \\n   `docker images  | grep kindest/node`\\n# \u6784\u5efak8s\u96c6\u7fa4\\n   \u9700\u8981\u4f7f\u7528\u7684kind\u914d\u7f6e\u6587\u4ef6`kind-example-config.yaml`  \\n```yaml\\nkind: Cluster\\napiVersion: kind.x-k8s.io/v1alpha4\\nkubeadmConfigPatches:\\n- |\\n  apiServer:\\n    extraArgs:\\n      v: \\"4\\"\\n  controllerManager:\\n    extraArgs:\\n      v: \\"4\\"\\n  scheduler:\\n    extraArgs:\\n      v: \\"4\\"\\n  apiVersion: kubelet.config.k8s.io/v1beta1\\n  kind: KubeletConfiguration\\n  evictionHard:\\n    nodefs.available: \\"0%\\"\\n- |\\n  apiVersion: kubeadm.k8s.io/v1beta2\\n  kind: InitConfiguration\\n  nodeRegistration:\\n    kubeletExtraArgs:\\n      v: \\"4\\"\\n- |\\n  apiVersion: kubeadm.k8s.io/v1beta2\\n  kind: JoinConfiguration\\n  nodeRegistration:\\n    kubeletExtraArgs:\\n      v: \\"4\\"\\nnetworking:\\n  disableDefaultCNI: true\\n  podSubnet: \\"10.0.0.0/16\\"\\n  serviceSubnet: \\"10.1.0.0/16\\"\\nnodes:\\n- role: control-plane\\n- role: worker\\n- role: worker\\n- role: worker\\n```  \\n---\\n**NOTE**  \\n   \u914d\u7f6e\u9879\u4e00\u5b9a\u8981\u8bbe\u7f6e`disableDefaultCNI: true`\\n\\n---  \\n   \u521b\u5efacluster  \\n   `kind create cluster --config=kind-example-config.yaml --image=kindest/node:latest`  \\n# \u5b89\u88c5cilium service-mesh\u955c\u50cf\\n  \u5b89\u88c5cilium-cli  \\n```\\ncurl -L --remote-name-all https://github.com/cilium/cilium-cli/releases/latest/download/cilium-linux-amd64.tar.gz{,.sha256sum}\\nsha256sum --check cilium-linux-amd64.tar.gz.sha256sum\\nsudo tar xzvfC cilium-linux-amd64.tar.gz /usr/local/bin\\nrm cilium-linux-amd64.tar.gz{,.sha256sum}\\n```\\n---\\n**NOTE**  \\n  \u8bf7\u4fdd\u969ccilium-cli\u7248\u672c > v0.10.0  \\n\\n---  \\n  \u4f7f\u7528\u5982\u4e0b\u4e00\u5c0f\u6bb5\u811a\u672c\u6765\u7b80\u5316kind\u4e0a\u7684\u5b89\u88c5\u8fc7\u7a0b,\u5c06\u4e4b\u547d\u540d\u4e3a`load.sh`\\n```bash\\nciliumMeshImage=(\\"quay.io/cilium/cilium-service-mesh:v1.11.0-beta.1\\" \\"quay.io/cilium/operator-generic-service-mesh:v1.11.0-beta.1\\" \\"quay.io/cilium/hubble-relay-service-mesh:v1.11.0-beta.1\\")\\nfor i in ${ciliumMeshImage[@]}\\ndo\\n  docker pull $i\\n  kind load docker-image $i\\ndone\\n\\n```\\n   \u6267\u884c`./load.sh`  \\n   \u6267\u884c\u547d\u4ee4\\n```bash\\n   cilium install --version -service-mesh:v1.11.0-beta.1 --config enable-envoy-config=true  --datapath-mode=vxlan  --kube-proxy-replacement=probe \\n```\\n---\\n**NOTE**  \\n  \u9009\u9879\u89e3\u91ca: \\n  - `-service-mesh:v1.11.0-beta.1`\u662f\u5b8c\u6574\u7684\u7248\u672c\u540e\u7f00, cilium-cli(>v0.10.0)\u4f1a\u901a\u8fc7\u6b63\u5219\u8868\u8fbe\u5f0f\u6765\u5339\u914d,\u8bf7\u4fdd\u969c\u4e0d\u8981\u51fa\u9519  \\n  - `enable-envoy-config=true` \u4f7f\u80fd\u5bf9\u5e94\u7684k8s CR\\n  - `--datapath-mode=vxlan` \u76ee\u524dmesh\u529f\u80fd\u8fd8\u4e0d\u652f\u6301native routing, \u5fc5\u987b\u4e3atunnel\u6a21\u5f0f,\u8be6\u89c1issue  \\n  [L7 traffic examples need tunnelling datapath mode](https://github.com/cilium/cilium-service-mesh-beta/issues/9)\\n  - `--kube-proxy-replacement=probe` \u4f7f\u80fdbpf\u76f8\u5173feature\u63a2\u9488, \u6839\u636e\u5185\u6838\u7248\u672c\u5bf9bpf\u7684\u652f\u6301\u80fd\u529b\u8bbe\u7f6ecilium-agent\u7684\u914d\u7f6e  \\n\\n---\\n  \u9a8c\u8bc1\u5b89\u88c5\u7ed3\u679c`cilium status`\\n# \u5b89\u88c5kubegems\\n  \u8be6\u7ec6\u6b65\u9aa4\u8bf7\u53c2\u8003[kubegems quick start](https://github.com/kubegems/installer-operator#quick-start)  \\n\\n# \u9a8c\u8bc1\u6b65\u9aa4\\n- ingress\u76f8\u5173\u9a8c\u8bc1 [ingress](https://github.com/cilium/cilium-service-mesh-beta/blob/main/kubernetes-ingress/http.md)  \\n  kind\u7248\u672c\u96c6\u7fa4\u7684ingress\u9a8c\u8bc1\u9700\u8981\u4fee\u6539\u5185\u6838\u542f\u52a8\u53c2\u6570,\u56e0\u4e3asocket-level\u7684BPF\u7a0b\u5e8f\u6682\u65f6\u65e0\u6cd5\u51c6\u786e\u5224\u65ad\u4e0a\u4e0b\u6587\u662f\u5426\u5904\u4e8ehost ns,\u89e3\u51b3\u65b9\u6848\u662f\u542f\u52a8full kube-proxy replacement,\\n  \u8fd9\u4e2a\u9700\u8981\u7981\u6b62cgroup v1,\u7981\u6b62cgroup v1(ubuntu21.04)\u547d\u4ee4\u5982\u4e0b  \\n```bash\\nsudo vim /etc/default/grub\\n+ GRUB_CMDLINE_LINUX=\\"cgroup_no_v1=all\\"\\nsudo reboot\\n```\\n  \u8be6\u7ec6\u80cc\u666f\u5206\u6790\u53c2\u89c1[issue](https://github.com/cilium/cilium-service-mesh-beta/issues/3) \\n- metric\u76f8\u5173\u9a8c\u8bc1 [Open Telemetry](https://github.com/cilium/cilium-service-mesh-beta/tree/main/custom-envoy-listener)\\n- l7 traffic [L7-aware Traffic Management](https://github.com/cilium/cilium-service-mesh-beta/tree/main/l7-traffic-management)\\n\\n## \u5f00\u53d1\u73af\u5883\u642d\u5efa\u5de5\u4f5c\\n  \u5f85\u7eed\\n# \u9047\u5230\u7684\u95ee\u9898\u4ee5\u53ca\u89e3\u51b3\u65b9\u6cd5\\n  - \u7f16\u8bd1\u5668\u7248\u672c\u548c\u5185\u6838\u7248\u672c\u7684\u9009\u62e9\\n    \u76ee\u524d\u6211\u4f7f\u7528\u7684ubuntu21.04,clang-14\u662f\u6709\u95ee\u9898\u7684,\u5185\u6838\u7248\u672c\u8f83\u4f4e,\u4f46\u7f16\u8bd1\u5668\u7248\u672c\u8f83\u9ad8,\u63a8\u8350ubuntu20.04 LTS + clang-10\\n    \u6211\u76ee\u524d\u63d0\u4e86\u4e00\u4e9b\u76f8\u5173issue,\u5f85\u8fdb\u4e00\u6b65\u5206\u6790\u89e3\u51b3  \\n    [llvm](https://github.com/cilium/cilium/issues/18861)  \\n    [operator](https://github.com/cilium/cilium-service-mesh-beta/issues/25)  \\n  - iptable\u6a21\u5f0f\u7684k8s\u9650\u5236  \\n    cilium\u5b9e\u73b0ingress\u65b9\u6848\u8f83\u4e3a\u7279\u6b8a,\u6ca1\u6709\u548cistio-gateway/nginx\u4e00\u6837\u5efa\u7acb\u5bf9\u5e94\u7684\u771f\u5b9e\u7684endpoint POD,\u53ea\u6709\u4e00\u4e2aloadbalancer service,\u8fd9\u6837\\n    \u76f4\u63a5\u5728\u865a\u62df\u673a\u73af\u5883\u4e0anodeport\u65b9\u5f0f\u4e0d\u5de5\u4f5c,\u56e0\u4e3afilter\u8868\u4e2d\u4f1a\u6709\u5bf9\u5e94\u7684REJECT\u89c4\u5219, \u53c2\u89c1k8s\u6e90\u4ee3\u7801  \\n    https://github.com/kubernetes/kubernetes/blob/18df5ad1fdce9d4f7c9c04a9ea4bdcc7a7400a16/pkg/proxy/iptables/proxier.go#L1177-L1253"},{"id":"kubegems-auth","metadata":{"permalink":"/kubegems.io/blog/kubegems-auth","source":"@site/blog/2022-03-21-kubegems-auth.md","title":"\u767b\u9646\u548c\u8ba4\u8bc1\u8bbe\u8ba1","description":"\u767b\u9646\u6a21\u5757","date":"2022-03-21T00:00:00.000Z","formattedDate":"2022\u5e743\u670821\u65e5","tags":[{"label":"\u767b\u9646\u8ba4\u8bc1","permalink":"/kubegems.io/blog/tags/\u767b\u9646\u8ba4\u8bc1"},{"label":"kubegems","permalink":"/kubegems.io/blog/tags/kubegems"}],"readingTime":1.995,"truncated":false,"authors":[{"name":"yud","title":"developer@kubegems","url":"https://github.com/pepesi","imageURL":"https://github.com/pepesi.png","key":"pepesi"}],"frontMatter":{"slug":"kubegems-auth","title":"\u767b\u9646\u548c\u8ba4\u8bc1\u8bbe\u8ba1","authors":["pepesi"],"tags":["\u767b\u9646\u8ba4\u8bc1","kubegems"]},"prevItem":{"title":"sidecarless-mesh\u65b9\u6848\u53ef\u884c\u6027\u9a8c\u8bc1","permalink":"/kubegems.io/blog/sidecarless-mesh"},"nextItem":{"title":"\u6743\u9650\u8bbe\u8ba1","permalink":"/kubegems.io/blog/kubegems-perms"}},"content":"## \u767b\u9646\u6a21\u5757\\n\\n### \u9700\u6c42\\n\\n\u652f\u6301\u591a\u6e90\u767b\u9646(ldap, oauth2)\\n\\n### \u767b\u9646\u8bbe\u8ba1\\n\\n\u63d2\u4ef6\u5f0f\u8bbe\u8ba1\uff0c\u5141\u8bb8\u4e0d\u540c\u7c7b\u578b\u7684\u767b\u9646\u6e90\u5b9e\u73b0\u767b\u9646\u63d2\u4ef6\u5373\u53ef,\u63d2\u4ef6\u76ee\u524d\u5206\u4e3a\u4e24\u7c7b,\u5206\u522b\u662f`OAUTH`\u548c`LDAP`\\n\\n\u63d2\u4ef6\u9700\u8981\u5b9e\u73b0\u63a5\u53e3`aaa.AuthenticateIface`\u63a5\u53e3\\n\\n    type AuthenticateIface interface {\\n        // \u8fd4\u56de\u767b\u9646\u63d2\u4ef6\u7684\u540d\u5b57\\n        GetName() string\\n        // \u8fd4\u56de\u767b\u9646\u5730\u5740\\n        LoginAddr() string\\n        // , \u83b7\u53d6\u7528\u6237\u4fe1\u606f\\n        // \u9a8c\u8bc1\u51ed\u636e,\u83b7\u53d6\u6839\u636e\u7528\u6237\u63d0\u4f9b\u7684\u51ed\u636e\u83b7\u53d6\u7528\u6237\u4fe1\u606f\\n        GetUserInfo(ctx context.Context, cred *Credential) (*UserInfo, error)\\n    }\\n\\n\u767b\u9646\u6d41\u7a0b:\\n\\n1. LDAP\u7c7b\u578b\u548c\u9ed8\u8ba4\u8d26\u53f7\u5bc6\u7801\u767b\u9646,\u76f4\u63a5\u63d0\u4f9b\u767b\u9646\u7684\u7528\u6237\u548c\u5bc6\u7801\u4ee5\u53ca\u767b\u9646\u6e90\u5373\u53ef,\u767b\u9646\u540e\u5c06\u83b7\u5f97token\\n\\n2. OAUTH\u7c7b\u578b\uff0c\u5148\u83b7\u53d6\u767b\u9646\u5730\u5740\uff0c\u91cd\u5b9a\u5411\u5230\u767b\u9646\u5730\u5740\uff0c\u901a\u5e38\u8fd9\u4e2a\u767b\u9646\u5730\u5740\u4e3a\u7b2c\u4e09\u65b9\u5e73\u53f0\u7684\u8ba4\u8bc1\u6388\u6743\u754c\u9762\uff0c\u6388\u6743\u540e\u7b2c\u4e09\u65b9\u5c06\u4f1a\u91cd\u5b9a\u5411\u5230\u5e73\u53f0\u914d\u7f6e\u7684\u4e00\u4e2a\u5730\u5740\uff0c\u5e76\u4e14\u643a\u5e26\u7740\u7b2c\u4e09\u65b9\u5e73\u53f0\u7684\u4e00\u4e2a\u6388\u6743code,\u5e73\u53f0\u901a\u8fc7\u8fd9\u4e2acode\u83b7\u53d6access_token\uff0c\u518d\u5e26\u7740\u8fd9\u4e2aaccess_token\u8bbf\u95ee\u7528\u6237\u4fe1\u606f\uff0c\u901a\u8fc7\u7b2c\u4e09\u65b9\u5e73\u53f0\u4e2d\u7684`\u7528\u6237\u540d`\u4f5c\u4e3akubegems\u4e2d\u7684\u7528\u6237\uff0c\u767b\u9646\u6210\u529f\u540e\u83b7\u5f97token\\n\\n\\n### \u8ba4\u8bc1\u8bbe\u8ba1\\n\\n\u63d2\u4ef6\u5f0f\u8bbe\u8ba1\uff0c\u76ee\u524d\u4ec5\u5b9e\u73b0\u4e86\u57fa\u4e8eJWT\u7684\u8ba4\u8bc1\u65b9\u5f0f; \u9700\u8981\u5b9e\u73b0\u63a5\u53e3`aaa.UserGetterIface`\\n\\n    type UserGetterIface interface {\\n        GetUser(req *http.Request) (u user.CommonUserIface, exist bool)\\n    }\\n\\n\u8ba4\u8bc1\u6d41\u7a0b\\n\\n\u4e0d\u540c\u7684\u8ba4\u8bc1\u63d2\u4ef6, \u4ece\u8bf7\u6c42\u5934\u4e2d\u83b7\u53d6\u9700\u8981\u7684\u4fe1\u606f\uff0c\u4f8b\u5982\u901a\u8fc7Authorization\u5934\u83b7\u53d6Bearer token,\u901a\u8fc7\u83b7\u53d6\u5230\u7684\u4fe1\u606f\u8f7d\u5165\u7528\u6237\uff0c\u5982\u679c\u6ca1\u6709\u627e\u5230\u7528\u6237\uff0c\u5219\u8868\u793a\u672a\u767b\u9646"},{"id":"kubegems-perms","metadata":{"permalink":"/kubegems.io/blog/kubegems-perms","source":"@site/blog/kubegems-perms/2022-03-21-kubegems-perms.md","title":"\u6743\u9650\u8bbe\u8ba1","description":"\u4e3b\u8981\u6570\u636e\u6a21\u578b","date":"2022-03-21T00:00:00.000Z","formattedDate":"2022\u5e743\u670821\u65e5","tags":[{"label":"\u6743\u9650\u8bbe\u8ba1","permalink":"/kubegems.io/blog/tags/\u6743\u9650\u8bbe\u8ba1"},{"label":"kubegems","permalink":"/kubegems.io/blog/tags/kubegems"}],"readingTime":4.64,"truncated":false,"authors":[{"name":"yud","title":"developer@kubegems","url":"https://github.com/pepesi","imageURL":"https://github.com/pepesi.png","key":"pepesi"}],"frontMatter":{"slug":"kubegems-perms","title":"\u6743\u9650\u8bbe\u8ba1","authors":["pepesi"],"tags":["\u6743\u9650\u8bbe\u8ba1","kubegems"]},"prevItem":{"title":"\u767b\u9646\u548c\u8ba4\u8bc1\u8bbe\u8ba1","permalink":"/kubegems.io/blog/kubegems-auth"}},"content":"## \u4e3b\u8981\u6570\u636e\u6a21\u578b\\n\\n![pic](./data-models.drawio.svg)\\n\\n\u6570\u636e\u6a21\u578b\u7684\u4e3b\u8981\u5c42\u7ea7\u5173\u7cfb\u4e3a `\u79df\u6237 -> \u9879\u76ee -> \u73af\u5883 -> \u5e94\u7528`;\\n\\n\u5bf9\u5e94\u5230\u96c6\u7fa4\u4e2d\u7684\u4ee5\u4e0b\u8d44\u6e90\\n\\n| \u8d44\u6e90|\u7b80\u5199| group/version| \u662f\u5426\u662fnamespaced\u8d44\u6e90| Crd|\\n| ---|---|---|---|---|\\n|environments                      |tenv               |gems.kubegems.io/v1beta1            |false        |Environment|\\n|tenantgateways                    |tgw                |gems.kubegems.io/v1beta1            |false        |TenantGateway |\\n|tenantnetworkpolicies             |tnetpol            |gems.kubegems.io/v1beta1            |false        |TenantNetworkPolicy |\\n|tenantresourcequotas              |tquota             |gems.kubegems.io/v1beta1            |false        |TenantResourceQuota |\\n|tenants                           |ten                |gems.kubegems.io/v1beta1            |false        |Tenant |\\n\\n1. \u7cfb\u7edf\u5185\u9876\u7ea7\u8d44\u6e90\u4e3a `\u79df\u6237` \u548c `\u96c6\u7fa4`,  \u79df\u6237\u548c\u96c6\u7fa4\u90fd\u7531\u7cfb\u7edf\u7ba1\u7406\u5458\u6dfb\u52a0\uff1b\u79df\u6237\u4e0e\u96c6\u7fa4\u901a\u8fc7`TenantResourceQuota`\u5173\u8054\uff0c\u4e00\u4e2a\u79df\u6237\u5728\u4e00\u4e2a\u96c6\u7fa4\u4e0b\u53ea\u80fd\u5b58\u5728\u4e00\u4e2aTenantResourceQuota;\\n\u79df\u6237\u6620\u5c04\u5230\u96c6\u7fa4\u4e2d\u7684CRD\u4e3a`Tenant`, \u79df\u6237CRD\u4e0b\u5b58\u5728`\u7f51\u7edc\u9694\u79bb\u7b56\u7565(TenantNetworkPolicy)`\u548c`\u8d44\u6e90\u9650\u5236(TenantResourceQuota)`\u4ee5\u53ca`\u79df\u6237\u7f51\u5173(TenantGateway)`, \u8fd9\u4e9b\u5b50\u8d44\u6e90\u90fd\u5c06\u5728\u79df\u6237crd\u521b\u5efa\u7684\u65f6\u5019\u9ed8\u8ba4\u521b\u5efa\uff1b\\n\\n2. `\u7528\u6237(Users)`\u4e0e\u79df\u6237\uff0c\u9879\u76ee\uff0c\u73af\u5883\u90fd\u5b58\u5728\u7740\u5173\u8054\u5173\u7cfb\uff0c\u8fd9\u4e9b\u5173\u8054\u5173\u7cfb\u5c06\u4e3a\u4ee5\u540e\u7684\u7528\u6237\u6743\u9650\u63d0\u4f9b\u6570\u636e\u652f\u6301\uff1b\\n\\n3. `\u9879\u76ee`\u4ec5\u4ec5\u662f\u5e73\u53f0\u4fa7\u7684\u6982\u5ff5\uff0c\u5b83\u8868\u793a\u4e00\u7ec4\u5e94\u7528\u7684\u96c6\u5408\\n\\n4. `\u73af\u5883`\u4e0e\u96c6\u7fa4\u7684`namespace`\u5173\u8054\uff0c\u5b9e\u73b0\u73af\u5883\u9694\u79bb\uff0c\u8d44\u6e90\u9650\u5236\uff0c\u7f51\u7edc\u9694\u79bb\u7b49\uff0c\u73af\u5883\u5219\u66f4\u591a\u7684\u662f\u8fd0\u7ef4\u76f8\u5173\u5c5e\u6027;\\n\\n5. `\u5e94\u7528`\u8868\u793a\u771f\u5b9e\u7684\u5e94\u7528\\n\\n\\n\\n## \u7528\u6237\u8ba4\u8bc1 \u548c \u767b\u9646\\n\\n1. \u672c\u5730\u8ba4\u8bc1\uff0c\u652f\u6301\u8d26\u53f7+\u5bc6\u7801\u767b\u9646\\n\\n2. \u5916\u90e8\u8ba4\u8bc1\uff0c\u652f\u6301ldap\u548coauth2\u7684\u8ba4\u8bc1\\n\\n## \u7528\u6237\u6743\u9650\\n\\n\u7cfb\u7edf\u7684\u7528\u6237\u6743\u9650\u4e3b\u8981\u901a\u8fc7`\u89d2\u8272`\u5b9e\u73b0, `\u89d2\u8272`\u53c8\u5206\u4e3a`\u7cfb\u7edf\u7ea7\u89d2\u8272`,`\u79df\u6237\u7ea7\u89d2\u8272`,`\u9879\u76ee\u7ea7\u89d2\u8272`\u548c`\u73af\u5883\u7ea7\u89d2\u8272`;\\n\\n1. \u7cfb\u7edf\u7ea7\u89d2\u8272\\n\\n- \u7cfb\u7edf\u7ba1\u7406\u5458\\n\\t\\n\\t`\u7cfb\u7edf\u7ba1\u7406\u5458`\u7684\u804c\u8d23\u662f\u7ba1\u7406\u7cfb\u7edf\u8d44\u6e90\uff0c\u96c6\u7fa4\uff0c\u96c6\u7fa4\u63d2\u4ef6\uff0c\u79df\u6237\u7b49; \u7cfb\u7edf\u7ba1\u7406\u5458\u62e5\u6709\u4e00\u5207\u8d44\u6e90\u7684\u64cd\u4f5c\u6743\u9650\u548c\u8bfb\u6743\u9650\\n\\t \\n- \u666e\u901a\u7528\u6237\\n\\n\\t\u666e\u901a\u7528\u6237\u4ee3\u8868kubgems\u4e2d\u7684\u666e\u901a\u6210\u5458\uff0c\u7528\u7528`\u666e\u901a\u7528\u6237`\u89d2\u8272\u7684\u8d26\u53f7\u4ec5\u80fd\u767b\u9646\u7cfb\u7edf\uff0c\u5176\u4ed6\u79df\u6237\uff0c\u9879\u76ee\u7b49\u6743\u9650\u5c06\u6839\u636e\u79df\u6237\u548c\u9879\u76ee\u4e0b\u7684\u89d2\u8272\u5224\u65ad\\n\\n2. \u79df\u6237\u7ea7\u89d2\u8272\\n\\n- \u79df\u6237\u7ba1\u7406\u5458\\n\\n\\t`\u79df\u6237\u7ba1\u7406\u5458`\u7684\u804c\u8d23\u662f\u8d1f\u8d23\u79df\u6237\u7684\u6210\u5458\u7ba1\u7406\u548c\u9879\u76ee\u7ba1\u7406,\u8d1f\u8d23\u9879\u76ee\u6dfb\u52a0\u548c\u5220\u9664\uff0c\u79df\u6237\u6210\u5458\u7684\u6dfb\u52a0\u548c\u4fee\u6539; \u79df\u6237\u7ba1\u7406\u5458\u62e5\u6709\u79df\u6237\u4e0b\u7684\u4e00\u5207\u8d44\u6e90\u64cd\u4f5c\u6743\u9650\u548c\u8bfb\u6743\u9650\\n\\n- \u79df\u6237\u6210\u5458\\n\\n\\t`\u79df\u6237\u6210\u5458`\u9ed8\u8ba4\u4ec5\u53ef\u4ee5\u8bfb\u79df\u6237\u4e0b\u7684\u9879\u76ee\u4fe1\u606f; \u5728\u6dfb\u52a0`\u9879\u76ee\u6210\u5458`\uff0c`\u73af\u5883\u6210\u5458`\u7684\u65f6\u5019\uff0c\u7528\u6237\u5fc5\u987b\u662f\u79df\u6237\u6210\u5458\u624d\u80fd\u4f5c\u4e3a\u9879\u76ee\u6210\u5458\u548c\u73af\u5883\u6210\u5458\u7684\u5907\u9009\u9879;\\n\\t\\n3. \u9879\u76ee\u7ea7\\n\\t\\n- \u9879\u76ee\u7ba1\u7406\u5458 \\n\\n\\t`\u9879\u76ee\u7ba1\u7406\u4e3b`\u7684\u804c\u8d23\u662f\u8d1f\u8d23\u9879\u76ee\u7684\u6210\u5458\u7ba1\u7406\uff0c\u9879\u76ee\u7684\u73af\u5883\u7ba1\u7406\u548c\u9879\u76ee\u4e0b\u7684\u5e94\u7528\u7ba1\u7406; \u9879\u76ee\u7ba1\u7406\u5458\u62e5\u6709\u9879\u76ee\u4e0b\u7684\u4e00\u5207\u8d44\u6e90\u7684\u64cd\u4f5c\u6743\u9650\u548c\u8bfb\u6743\u9650;\\n\\n- \u9879\u76ee\u6210\u5458\\n\\n\\t\u9879\u76ee\u6210\u5458\u62e5\u6709\u4e09\u4e2a\u89d2\u8272\uff0c\u5206\u522b\u662f`\u5f00\u53d1` `\u6d4b\u8bd5` `\u8fd0\u7ef4`\\n\\n\\t\u9879\u76ee`\u5f00\u53d1`\u6210\u5458\u53ef\u4ee5\u8bfb\u6240\u6709\u73af\u5883\uff0c\u53ea\u80fd\u64cd\u4f5c`\u5f00\u53d1`\u7c7b\u578b\u7684\u73af\u5883\\n\\n\\t\u9879\u76ee`\u6d4b\u8bd5`\u6210\u5458\u53ef\u4ee5\u8bfb\u6240\u6709\u73af\u5883\uff0c\u53ea\u80fd\u64cd\u4f5c`\u6d4b\u8bd5`\u7c7b\u578b\u7684\u73af\u5883\\n\\t\\n\\t\u9879\u76ee`\u8fd0\u7ef4`\u6210\u5458\u53ef\u4ee5\u8bfb\u6240\u6709\u73af\u5883\uff0c\u53ef\u4ee5\u64cd\u4f5c`\u5f00\u53d1` `\u6d4b\u8bd5` `\u751f\u4ea7`\u7c7b\u578b\u7684\u73af\u5883\\n\\t\\t\\n4. \u73af\u5883\u7ea7\\n\\n- \u73af\u5883reader\\n\\n\\t\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u9879\u76ee\u6210\u5458\u662f\u6240\u6709\u73af\u5883\u7684reader,\u5373\u53ea\u8981\u662f`\u9879\u76ee\u6210\u5458`\uff0c\u5c31\u80fd\u8bfb\u53d6\u6240\u6709\u7684\u73af\u5883\u6570\u636e\\n\\n- \u73af\u5883operator\\n\\n\\t\u901a\u5e38\u4e0d\u9700\u8981\u914d\u7f6e\u8fd9\u4e2a\u89d2\u8272\uff0c\u4f46\u662f\u6709\u7279\u6b8a\u7684\u60c5\u51b5\uff0c\u4f8b\u5982\u5f00\u53d1\u9700\u8981\u64cd\u4f5c`\u751f\u4ea7`\u73af\u5883\u7684\u8d44\u6e90\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5f00\u53d1\u4eba\u5458\u53ea\u80fd\u64cd\u4f5c\u5f00\u53d1\u73af\u5883\uff0c\u8fd9\u65f6\u5019\u6388\u6743\u5f00\u53d1\u4eba\u5458\u5728\u751f\u4ea7\u73af\u5883\u662foperator\u7684\u89d2\u8272\uff0c\u5c31\u53ef\u4ee5\u64cd\u4f5c\u751f\u4ea7\u73af\u5883\u4e86;"}]}')}}]);