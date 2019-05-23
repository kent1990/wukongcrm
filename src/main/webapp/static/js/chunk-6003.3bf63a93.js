(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6003"],{"+H+P":function(e,t,i){"use strict";var a={name:"edit-image",components:{VueCropper:i("TJmh").VueCropper},computed:{},watch:{show:{handler:function(e){this.showDialog=e},deep:!0,immediate:!0},image:function(e){this.cropperImg=e}},data:function(){return{loading:!1,showDialog:!1,cropperImg:"",previewImg:""}},props:{width:{type:String,default:"450px"},title:{type:String,default:"编辑头像"},saveButtonTitle:{type:String,default:"开始上传"},show:{type:Boolean,default:!1},fixedNumber:{type:Array,default:function(){return[1,1]}},previewWidth:{type:String,default:"70px"},previewHeight:{type:String,default:"70px"},previewRadius:{type:String,default:"35px"},file:[File],image:String},mounted:function(){this.cropperImg=this.image},methods:{realTime:function(e){var t=this;this.$refs.cropper.getCropData(function(e){t.previewImg=e})},submiteImage:function(){var e=this;this.$refs.cropper.getCropBlob(function(t){e.$emit("save",{blob:t,file:e.file,image:e.previewImg}),e.hiddenView()})},hiddenView:function(){this.$emit("close")}}},s=(i("VLHM"),i("ZrdR")),n=Object(s.a)(a,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{title:e.title,width:e.width,"append-to-body":!0,visible:e.showDialog},on:{close:e.hiddenView,"update:visible":function(t){e.showDialog=t}}},[i("flexbox",{staticClass:"content"},[i("div",{staticClass:"cropper-box"},[i("vueCropper",{ref:"cropper",attrs:{canMove:!0,autoCrop:!0,fixed:!0,fixedNumber:e.fixedNumber,outputType:"png",img:e.cropperImg},on:{realTime:e.realTime}})],1),e._v(" "),i("div",{staticClass:"preview"},[i("div",{staticClass:"preview-name"},[e._v("预览")]),e._v(" "),i("img",{staticClass:"preview-img",style:{width:e.previewWidth,height:e.previewHeight,"border-radius":e.previewRadius},attrs:{src:e.previewImg}})])]),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submiteImage()}}},[e._v(e._s(e.saveButtonTitle))])],1)],1)},[],!1,null,"27095237",null);n.options.__file="EditImage.vue";t.a=n.exports},BTIB:function(e,t,i){},LCjR:function(e,t,i){},VLHM:function(e,t,i){"use strict";var a=i("LCjR");i.n(a).a},XR9T:function(e,t,i){"use strict";i.r(t);var a=i("Q2cO"),s=i.n(a),n=i("QabZ"),o={name:"system-config",components:{EditImage:i("+H+P").a},data:function(){return{loading:!1,showEditImage:!1,editImage:null,editFile:null,systemName:"",systemImage:"",editedImage:null}},mounted:function(){this.getDetail()},methods:{fileUpload:function(e){var t=new FileReader,i=this;t.onload=function(t){var a=void 0;a="object"===s()(t.target.result)?window.URL.createObjectURL(new Blob([t.target.result])):t.target.result,i.editImage=a,i.editFile=e.file,i.showEditImage=!0},t.readAsDataURL(e.file)},deleteSystemImage:function(){this.systemImage="",this.editedImage=null},getDetail:function(){var e=this;this.loading=!0,this.$store.dispatch("SystemLogoAndName").then(function(t){e.loading=!1,e.systemName=t.data.name?t.data.name:"",e.systemImage=t.data.logo}).catch(function(){e.loading=!1})},submiteImage:function(e){this.editedImage=e,this.systemImage=e.image},save:function(){var e=this;if(this.systemName){this.loading=!0;var t=new FormData;t.append("name",this.systemName),this.editedImage&&t.append("file",this.editedImage.blob,this.editedImage.file.name),Object(n.b)(t).then(function(t){e.loading=!1,e.$message.success("操作成功"),e.getDetail()}).catch(function(){e.loading=!1})}else this.$message.error("企业名称不能为空")}}},l=(i("jIIA"),i("ZrdR")),r=Object(l.a)(o,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("flexbox",{staticStyle:{height:"100%"},attrs:{direction:"column",align:"stretch"}},[i("div",{staticClass:"header"},[e._v("\n    系统配置\n  ")]),e._v(" "),i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"body"},[i("el-button",{staticClass:"save-button",attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")]),e._v(" "),i("div",{staticClass:"section"},[i("div",{staticClass:"name"},[e._v("企业名称")]),e._v(" "),i("el-input",{model:{value:e.systemName,callback:function(t){e.systemName=t},expression:"systemName"}})],1),e._v(" "),i("div",{staticClass:"section"},[i("div",{staticClass:"name"},[e._v("企业logo")]),e._v(" "),""==e.systemImage?i("el-upload",{staticClass:"upload",attrs:{drag:"","show-file-list":!1,action:"http",accept:"image/png, image/jpeg, image/gif, image/jpg","http-request":e.fileUpload}},[i("i",{staticClass:"el-icon-plus uploader-icon"})]):i("div",{staticClass:"upload-show"},[i("img",{attrs:{src:e.systemImage}}),e._v(" "),i("i",{staticClass:"el-icon-remove icon-delete",on:{click:e.deleteSystemImage}})])],1)],1),e._v(" "),i("edit-image",{attrs:{title:"编辑企业logo",fixedNumber:[15,4],previewWidth:"150px",previewHeight:"40px",previewRadius:"0",width:"550px",show:e.showEditImage,image:e.editImage,file:e.editFile,"save-button-title":"确定"},on:{save:e.submiteImage,close:function(t){e.showEditImage=!1}}})],1)},[],!1,null,"0eaba0b8",null);r.options.__file="index.vue";t.default=r.exports},jIIA:function(e,t,i){"use strict";var a=i("BTIB");i.n(a).a}}]);