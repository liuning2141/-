<!-- 个人信息 -->
<template>
  <div class="section1">
    <el-button v-if="this.flag" @click="loginOut" class="tuichu"
      >退出登录</el-button
    >
    <div class="container1">
      <div class="section-body1">
        <h2>报名表</h2>
        <div>
          <el-button
            type="button"
            size="mini"
            icon="el-icon-edit"
            class="xiugai"
            @click="handleUpdate"
            >修 改</el-button
          >
        </div>
        <table border="1" align="center" class="table1">
          <tr style="position: relative">
            <td colspan="8"><span class="td-header">第七期国家大剧院青年作曲家计划报名表</span> <span class="bianhao">{{this.ruleForm.productionCode}}</span></td>
          </tr>
          <tr>
            <td>姓名<br />Name</td>
            <td>
              <span>
                {{ this.ruleForm.participantName }}
              </span>
              <br />
              <span>{{ this.ruleForm.participantNameEng }}</span>
            </td>
            <td>性别<br />Gender</td>
            <td>{{ this.ruleForm.gender == '1' ? "女" : "男" }}</td>
            <td>年龄<br />Age</td>
            <td colspan="2">{{ this.ruleForm.age }}</td>
            <td rowspan="3" style="width:150px">
              <img v-if="this.ruleForm.photo" :src="this.ruleForm.photo" alt="" />
              <i v-else class="el-icon-plus w100"></i>
            </td>
          </tr>
          <tr>
            <td>国籍<br />Nationality</td>
            <td>{{ this.ruleForm.nationality }}</td>
            
            <td colspan="2">出生日期<br />Date of Birth</td>
            <td colspan="3">{{ this.ruleForm.birthDate }}</td>
          </tr>
          <tr>
            <td colspan="2">作品名称<br />Title</td>
            <td colspan="5" class="huanhang"><span>《{{ this.ruleForm.productionName }}》</span><br /><span>《{{
                this.ruleForm.productionNameEng
              }}》</span></td>
          </tr>
          <tr>
            <td colspan="2">现在读学校/现工作单位/自由职业<br />School</td>
            <td colspan="6" class="huanhang">{{ this.ruleForm.school }}</td>
          </tr>
          <tr>
            <td colspan="2">通讯地址<br />Postal Address</td>
            <td colspan="6" class="huanhang">{{ this.ruleForm.address }}</td>
          </tr>
          <tr>
            <td colspan="2">联系电话<br />Mobile phone number</td>
            <td colspan="2">{{ this.ruleForm.phone }}</td>
            <td>邮箱<br />Email</td>
            <td colspan="3">{{ this.ruleForm.email }}</td>
          </tr>
          <tr>
            <td colspan="2">教育经历<br />Education info</td>
            <td colspan="6" class="huanhang">
              {{ this.ruleForm.educationHistory }}
            </td>
          </tr>
          <tr>
            <td colspan="2">获奖情况<br />Previous Award received</td>
            <td colspan="6" class="huanhang">{{ this.ruleForm.award }}</td>
          </tr>
          <tr>
            <td colspan="2">乐器编制<br />Instrumentation</td>
            <td colspan="6" class="huanhang">
              {{ this.ruleForm.instrumentEstablishment }}
            </td>
          </tr>
          <tr>
            <td colspan="2">创作时间<br />Year of Completion</td>
            <td colspan="2">{{ this.ruleForm.creativeTime }}</td>
            <td>作品时长<br />Duration</td>
            <td colspan="3">{{ this.ruleForm.productionDuration }}</td>
          </tr>
          <tr>
            <td colspan="2">作品简介<br />Brief Introduction of work</td>
            <td colspan="6" class="huanhang">
              {{ this.ruleForm.productionSynopsis }}
            </td>
          </tr>
          <tr>
            <td colspan="2">
              参加过青作的次数<br />Previous participation of YCP
            </td>
            <td colspan="6" class="huanhang">{{ this.ruleForm.joinNumber }}</td>
          </tr>
        </table>
      </div>




      
      <!-- 修改信息 -->
      <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
        <el-form ref="form1" :model="form1" :rules="rules" label-width="80px" class="form1">
          <el-form-item label="姓名" prop="participantName" class="">
            <el-input v-model="form1.participantName"></el-input>
          </el-form-item>
          <el-form-item label="英文名" prop="participantNameEng" class="">
            <el-input v-model="form1.participantNameEng"></el-input>
          </el-form-item>

          <el-form-item label="性别" prop="gender">
            <el-select v-model="form1.gender" placeholder="请选择性别">
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="国籍" prop="nationality" class="">
                <el-input v-model="form1.nationality" @blur="nationalityBlur" placeholder="请输入中文国际名称"></el-input>
              </el-form-item>

         <!-- <el-form-item label="国籍" prop="nationality">
                <el-autocomplete
                  class="inline-input"
                  v-model="form1.nationality"
                  :fetch-suggestions="querySearch"
                  placeholder="请输入中文国际名称"
                  @select="handleSelect"
                ></el-autocomplete>
          </el-form-item> -->

          <el-form-item label="出生日期" prop="birthDate">
            <el-date-picker
              v-model="form1.birthDate"
                @input ="impose1"
              type="date"
              :picker-options="pickerOptions"
              placeholder="选择日期"
            >
            </el-date-picker>
          </el-form-item>

          <el-form-item label="年龄" prop="age" class="">
            <el-input v-model="form1.age" type="number" readOnly></el-input>
          </el-form-item>


          <el-form-item label="作品名称" prop="productionName" class="">
            <el-input v-model="form1.productionName"></el-input>
          </el-form-item>
           <el-form-item label="作品英文名" prop="productionNameEng" class="">
                <el-input v-model="form1.productionNameEng"></el-input>
              </el-form-item>
          <el-form-item label="创作时间" prop="creativeTime">
            <el-date-picker
              v-model="form1.creativeTime"
              type="month"
              :picker-options="pickercreativeTime"
              placeholder="选择日期"
            >
            </el-date-picker>
          </el-form-item>
              <p class="nationality-txt">作品时间最短13分钟,最长15分钟</p>
              <el-form-item label="作品时长" prop="productionDuration">
                <el-cascader
                   v-model="form1.productionDuration"
                   :options="duration"
                  :props="{ expandTrigger: 'hover' }"
                   @change="handleChange"></el-cascader>
            </el-form-item>

            <el-form-item label="电子邮箱" prop="email" class="">
            <el-input v-model="form1.email"></el-input>
          </el-form-item>

          <el-form-item label="联系电话" prop="phone" class="">
            <el-input v-model="form1.phone"></el-input>
          </el-form-item>

          

          <el-form-item label="通讯地址" prop="address" class="">
            <el-input v-model="form1.address"></el-input>
          </el-form-item>

          <div class="joinNumber">
            <el-form-item
            label="参加青作的次数"
            prop="joinNumber"
            class="w150"
          >
            <el-select
              v-model="form1.joinNumber"
               multiple
                 placeholder="请选择">
               <el-option
                   v-for="item in options"
                     :key="item.name"
                     :label="item.name"
                     :value="item.name">
               </el-option>
             </el-select>
          </el-form-item>
          </div>
          

          <el-form-item label="乐器编制" prop="instrumentEstablishment">
            <div style="color: #999">
                <p>管弦乐队最大编制不超过如下标注：</p>
                <p>
                  木管 2（可包括短笛）/ 2（可包括英国管）/ 2（可包括低音单簧管）/ 2（可包括低音巴松）
                </p>
                <p>铜管2/2/2/1件</p>
                <p>弦乐12/10/8/6/4件</p>
                <p>-非必选非定量乐器：</p>
                <p>打击乐（常规乐器）0-3人</p>
                <p>竖琴0-1人</p>
              </div>
            <el-input
              v-model="form1.instrumentEstablishment"
              type="textarea"
              placeholder="乐器编制: "
            />
          </el-form-item>
          <div class="hebing">
            <el-form-item label="现在读学校/现工作单位/自由职业" prop="school">
                <div style="color: #999">
                    <p>
                      <br> 现在读学校需细化到院系及专业名称<br>现工作单位需细化到具体岗位
                    </p>
                  </div>
                <el-input
                  v-model="form1.school"
                  type="textarea"
                  placeholder="填写示例：2006.9-2020.9  中央音乐学院作曲系作曲专业"
                />
            </el-form-item>
          </div>

          <!-- <el-form-item label="现工作单位" prop="work">
            <div style="color: #999">
                <p>已参加工作填写所在单位名称（需具体到岗位）</p>
                <p>
                  自由职业填写取得最高学历的学校信息（注明于***年毕业于学校/院系/专业）
                </p>
              </div>
            <el-input
              v-model="form1.work"
              type="textarea"
              placeholder="现工作单位:  Current working unit:"
            />
          </el-form-item> -->

          <el-form-item label="教育经历" prop="educationHistory">
            <div style="color: #999">
                <p>在读学习时间-学校名称-就读专业</p>
                <p>从高中起</p>
              </div>
            <el-input
              v-model="form1.educationHistory"
              type="textarea"
              placeholder="填写示例：2006.9-2020.9  中央音乐学院作曲系作曲专业"
            />
          </el-form-item>

          <!-- <el-form-item label="职业经历" prop="professionalHistory">
             <div style="color: #999">
                <p>参加工作时间-就职单位名称-岗位名称 ------ 没有职业经历可以写无</p>
              </div>
            <el-input
              v-model="form1.professionalHistory"
              type="textarea"
              placeholder="职业经历: / professionalHistory:"
            />
          </el-form-item> -->

         
          <el-form-item label="获奖情况" prop="award">
            <div style="color: #999">
                <p>获奖时间、所获奖项具体名称、具体获奖情况如名次等</p>
              </div>
            <el-input
              v-model="form1.award"
              type="textarea"
              placeholder="填写示例：**年，《作品名称》，“炎黄杯”铜管独奏作曲比赛一等奖"
            />
          </el-form-item>

          <el-form-item label="作品简介" prop="productionSynopsis">
            <div style="color: #999;">
                <p>简介内容可涵盖作品创作构思背景和音乐特点</p>
                <p>限中文</p>
                <p class="impose">还可以输入 <span>{{this.num}}</span> 个字</p>
              </div>
            <el-input
              v-model="form1.productionSynopsis"
                maxlength="300"
                @input ="impose"
              type="textarea"
              placeholder="作品简介: / introduction of works:"
            />
          </el-form-item>

          <el-form-item label="上传头像" prop="photo">
              <el-upload
                class="avatar-uploader"
                :action="Setting.baseUrl + '/tune/election/uploadImgFile'"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                accept=".jpg"
              >
                <img
                  v-if="form1.photo"
                  :src="form1.photo"
                  class="avatar"
                />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
              <div class="photo-txt">
                上传电子版照片必须为本人近期正面免冠彩色证件照，限jpg格式，不大于2M。
              </div>
            </el-form-item>

            <div class="pdf">
              <el-form-item label="" class="w200" prop="card">
              <span class="card">身份证/护照信息</span>
                <el-upload
                  class="upload-demo w500"
                  ref="upload"
                  :action="Setting.baseUrl+'/tune/election/uploadPDFFile'"
                  :on-remove="handleRemove"
                  :on-success="uploadSuccess"
                  :on-change="handleChange"
                  :file-list="fileList"
                  :auto-upload="false"
                  accept=application/pdf
                >
                  <el-button slot="trigger" size="small" type="primary"
                    >选取文件</el-button
                  >
                  <el-button
                    style="margin-left: 10px"
                    size="small"
                    type="success"
                    @click="submitUpload"
                    >上传到服务器</el-button
                  >
                  <el-button
                    style="margin-left: 10px"
                    size="small"
                    type="success"
                    ><a :href="form1.card" target="_blank">点击预览身份证/护照信息</a></el-button
                  >
                  <div slot="tip" class="el-upload__tip">请上传PDF文件,请将身份证正反面或护照个人信息页扫描至一个文件中</div>
                </el-upload>
              </el-form-item>

               <el-form-item label="个人简历" prop="bio">
                <el-upload
                  ref="resume"
                  :action="Setting.baseUrl+'/tune/election/uploadWordFile'"
                  :on-remove="resumeRemove"
                  :on-success="resumeSuccess"
                  :on-change="resumeChange"
                  :file-list="resumeList"
                  :auto-upload="false"
                  class="w200"
                  accept=".docx"
                >
                  <el-button slot="trigger" size="small" type="primary"
                    >选取文件</el-button
                  >
                  <el-button
                    style="margin-left: 10px"
                    size="small"
                    type="success"
                    @click="resumeUpload"
                    >上传到服务器</el-button
                  >
                  <el-button
                    style="margin-left: 10px"
                    size="small"
                    type="success"
                    ><a :href="form1.bio" target="_blank">点击打印个人简历</a></el-button
                  >
                  <div slot="tip" class="el-upload__tip">请上传word文件</div>
                </el-upload>
              </el-form-item>

              <el-form-item label="学历证明材料" class="w200">
                <el-upload
                  class="upload-demo"
                  ref="OfficialTranscript"
                  :action="Setting.baseUrl+'/tune/election/uploadPDFFile'"
                  :on-remove="OfficialTranscriptRemove"
                  :on-success="OfficialTranscriptSuccess"
                  :on-change="OfficialTranscriptChange"
                  :file-list="OfficialTranscriptList"
                  :auto-upload="false"
                  accept=application/pdf
                >
                  <el-button slot="trigger" size="small" type="primary"
                    >选取文件</el-button
                  >
                  <el-button
                    style="margin-left: 10px"
                    size="small"
                    type="success"
                    @click="OfficialTranscriptUpload"
                    >上传到服务器</el-button
                  >
                  <el-button
                    style="margin-left: 10px"
                    size="small"
                    type="success"
                    ><a :href="form1.diplomaCertificate" target="_blank">点击预览学历证明材料</a></el-button
                  >
                  <div slot="tip" class="el-upload__tip">请上传最高学历的学位证或其他同等有效证明材料的PDF文件</div>
                </el-upload>
              </el-form-item>

              <el-form-item label="获奖证明材料">
                <el-upload
                  ref="awardThat"
                  :action="Setting.baseUrl+'/tune/election/uploadPDFFile'"
                  :on-remove="AwardRemove"
                  :on-success="AwardSuccess"
                  :on-change="AwardChange"
                  :file-list="awardThatList"
                  :auto-upload="false"
                  class="w200"
                  accept=application/pdf
                >
                  <el-button slot="trigger" size="small" type="primary"
                    >选取文件</el-button
                  >
                  <el-button
                    style="margin-left: 10px"
                    size="small"
                    type="success"
                    @click="AwardUpload"
                    >上传到服务器</el-button
                  >
                  <el-button
                    style="margin-left: 10px"
                    size="small"
                    type="success"
                    ><a :href="form1.awardThat" target="_blank">点击预览获奖证明材料</a></el-button
                  >
                  <div slot="tip" class="el-upload__tip">请上传PDF文件</div>
                </el-upload>
              </el-form-item>

              <el-form-item label="其他说明性材料">
                <el-upload
                  ref="otherMaterial"
                  :action="Setting.baseUrl+'/tune/election/uploadWordFile'"
                  :on-remove="otherMaterialRemove"
                  :on-success="otherMaterialSuccess"
                  :on-change="otherMaterialChange"
                  :file-list="otherMaterialList"
                  :auto-upload="false"
                  accept=application/pdf
                  class="w200"
                >
                  <el-button slot="trigger" size="small" type="primary"
                    >选取文件</el-button
                  >
                  <el-button
                    style="margin-left: 10px"
                    size="small"
                    type="success"
                    @click="otherMaterialUpload"
                    >上传到服务器</el-button
                  >
                  <el-button
                    style="margin-left: 10px"
                    size="small"
                    type="success"
                    ><a :href="form1.otherMaterial" target="_blank">点击预览其他说明性材料</a></el-button
                  >
                  <div slot="tip" class="el-upload__tip">请上传PDF文件,可用于证明进行过非商业的公开性演出</div>
                </el-upload>
              </el-form-item>

               <el-form-item label="参选作品总谱" class="w200">
                <el-upload
                  class="upload-demo"
                  ref="originalScore"
                  :action="Setting.baseUrl+'/tune/election/uploadPDFFile'"
                  :on-remove="originalScoreRemove"
                  :on-success="originalScoreSuccess"
                  :on-change="originalScoreChange"
                  :file-list="originalScoreList"
                  :auto-upload="false"
                  accept=application/pdf
                >
                  <el-button slot="trigger" size="small" type="primary"
                    >选取文件</el-button
                  >
                  <el-button
                    style="margin-left: 10px"
                    size="small"
                    type="success"
                    @click="originalScoreUpload"
                    >上传到服务器</el-button
                  >
                  <el-button
                    style="margin-left: 10px"
                    size="small"
                    type="success"
                    ><a :href="form1.entriesScore" target="_blank">点击预览参选作品总谱</a></el-button
                  >
                  <div slot="tip" class="el-upload__tip">请上传PDF文件,A3尺寸</div>
                </el-upload>
              </el-form-item>

              <el-form-item label="参选作品音频" class="w200">
                <el-upload
                  ref="music"
                  :action="Setting.baseUrl+'/tune/election/uploadAudioFile'"
                  :on-remove="musicRemove"
                  :on-success="musicSuccess"
                  :on-change="musicChange"
                  :file-list="musicList"
                  :auto-upload="false"
                  accept="audio/*"
                >
                  <el-button slot="trigger" size="small" type="primary"
                    >选取文件</el-button
                  >
                  <el-button
                    style="margin-left: 10px"
                    size="small"
                    type="success"
                    @click="musicUpload"
                    :disabled='yinpin'
                    >上传到服务器</el-button
                  >
                  <el-button
                    style="margin-left: 10px"
                    size="small"
                    type="success"
                    ><a :href="form1.entriesAudio" target="_blank">点击预览参选作品音频</a></el-button
                  >
                  <div slot="tip" class="el-upload__tip">请上传MP3格式,不大于150M</div>
                </el-upload>
              </el-form-item>
            </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="success" @click="submitForm('form1')" class="footer-primary"
            >确 定</el-button
          >
          <el-button @click="cancel" class="footer-reset">取 消</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { inquire, updateParticipant } from "@/api/user";
import validateReg from "@/utils/validateReg.js";
import Setting from "@/utils/setting.js";
import Cookies from "js-cookie";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 手机号;
    var checkPhone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入本人手机号"));
      } else {
        if (!validateReg.regPhone.test(value)) {
          callback(new Error("请输入正确的手机格式"));
        }
        callback();
      }
    };
    // 邮箱
    var checkEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else {
        if (!validateReg.regEmail.test(value)) {
          callback(new Error("请输入正确的邮箱格式"));
        }
        callback();
      }
    };
    // 作品英文名
    var checkproductionNameEng = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入作品英文名"));
      } else {
        if (!validateReg.regproductionNameEng.test(value)) {
          callback(new Error("请输入首字母为大写的英文名"));
        }
        callback();
      }
    };

    //这里存放数据
    return {
      // 退出登录
      flag: false,
      // 国籍的选择
      restaurants: [],
      // 控制音频上传
      yinpin: false,
      // 个人简历字数限制
      num: 300,
      // 出生日期限制
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < 228615923900 - 8.64e6; //如果没有后面的-8.64e6就是不可以选择今天的
        },
      },
      // 创作时长
      duration: [
        {
          value: "13",
          label: "13分",
          children: [
            {
              value: "00",
              label: "00秒",
            },
            {
              value: "01",
              label: "01秒",
            },
            {
              value: "02",
              label: "02秒",
            },
            {
              value: "03",
              label: "03秒",
            },
            {
              value: "04",
              label: "04秒",
            },
            {
              value: "05",
              label: "05秒",
            },
            {
              value: "06",
              label: "06秒",
            },
            {
              value: "07",
              label: "07秒",
            },
            {
              value: "08",
              label: "08秒",
            },
            {
              value: "09",
              label: "09秒",
            },
            {
              value: "10",
              label: "10秒",
            },
            {
              value: "11",
              label: "11秒",
            },
            {
              value: "12",
              label: "12秒",
            },
            {
              value: "13",
              label: "13秒",
            },
            {
              value: "14",
              label: "14秒",
            },
            {
              value: "15",
              label: "15秒",
            },
            {
              value: "16",
              label: "16秒",
            },
            {
              value: "17",
              label: "17秒",
            },
            {
              value: "18",
              label: "18秒",
            },
            {
              value: "19",
              label: "19秒",
            },
            {
              value: "20",
              label: "20秒",
            },
            {
              value: "21",
              label: "21秒",
            },
            {
              value: "22",
              label: "22秒",
            },
            {
              value: "23",
              label: "23秒",
            },
            {
              value: "24",
              label: "24秒",
            },
            {
              value: "25",
              label: "25秒",
            },
            {
              value: "26",
              label: "26秒",
            },
            {
              value: "27",
              label: "27秒",
            },
            {
              value: "28",
              label: "28秒",
            },
            {
              value: "29",
              label: "29秒",
            },
            {
              value: "30",
              label: "30秒",
            },
            {
              value: "31",
              label: "31秒",
            },
            {
              value: "32",
              label: "32秒",
            },
            {
              value: "33",
              label: "33秒",
            },
            {
              value: "34",
              label: "34秒",
            },
            {
              value: "35",
              label: "35秒",
            },
            {
              value: "36",
              label: "36秒",
            },
            {
              value: "37",
              label: "37秒",
            },
            {
              value: "38",
              label: "38秒",
            },
            {
              value: "39",
              label: "39秒",
            },
            {
              value: "40",
              label: "40秒",
            },
            {
              value: "41",
              label: "41秒",
            },
            {
              value: "42",
              label: "42秒",
            },
            {
              value: "43",
              label: "43秒",
            },
            {
              value: "44",
              label: "44秒",
            },
            {
              value: "45",
              label: "45秒",
            },
            {
              value: "46",
              label: "46秒",
            },
            {
              value: "47",
              label: "47秒",
            },
            {
              value: "48",
              label: "48秒",
            },
            {
              value: "49",
              label: "49秒",
            },
            {
              value: "50",
              label: "50秒",
            },
            {
              value: "51",
              label: "51秒",
            },
            {
              value: "52",
              label: "52秒",
            },
            {
              value: "53",
              label: "53秒",
            },
            {
              value: "54",
              label: "54秒",
            },
            {
              value: "55",
              label: "55秒",
            },
            {
              value: "56",
              label: "56秒",
            },
            {
              value: "57",
              label: "57秒",
            },
            {
              value: "58",
              label: "58秒",
            },
            {
              value: "59",
              label: "59秒",
            },
          ],
        },
        {
          value: "14",
          label: "14分",
          children: [
            {
              value: "00",
              label: "00秒",
            },
            {
              value: "01",
              label: "01秒",
            },
            {
              value: "02",
              label: "02秒",
            },
            {
              value: "03",
              label: "03秒",
            },
            {
              value: "04",
              label: "04秒",
            },
            {
              value: "05",
              label: "05秒",
            },
            {
              value: "06",
              label: "06秒",
            },
            {
              value: "07",
              label: "07秒",
            },
            {
              value: "08",
              label: "08秒",
            },
            {
              value: "09",
              label: "09秒",
            },
            {
              value: "10",
              label: "10秒",
            },
            {
              value: "11",
              label: "11秒",
            },
            {
              value: "12",
              label: "12秒",
            },
            {
              value: "13",
              label: "13秒",
            },
            {
              value: "14",
              label: "14秒",
            },
            {
              value: "15",
              label: "15秒",
            },
            {
              value: "16",
              label: "16秒",
            },
            {
              value: "17",
              label: "17秒",
            },
            {
              value: "18",
              label: "18秒",
            },
            {
              value: "19",
              label: "19秒",
            },
            {
              value: "20",
              label: "20秒",
            },
            {
              value: "21",
              label: "21秒",
            },
            {
              value: "22",
              label: "22秒",
            },
            {
              value: "23",
              label: "23秒",
            },
            {
              value: "24",
              label: "24秒",
            },
            {
              value: "25",
              label: "25秒",
            },
            {
              value: "26",
              label: "26秒",
            },
            {
              value: "27",
              label: "27秒",
            },
            {
              value: "28",
              label: "28秒",
            },
            {
              value: "29",
              label: "29秒",
            },
            {
              value: "30",
              label: "30秒",
            },
            {
              value: "31",
              label: "31秒",
            },
            {
              value: "32",
              label: "32秒",
            },
            {
              value: "33",
              label: "33秒",
            },
            {
              value: "34",
              label: "34秒",
            },
            {
              value: "35",
              label: "35秒",
            },
            {
              value: "36",
              label: "36秒",
            },
            {
              value: "37",
              label: "37秒",
            },
            {
              value: "38",
              label: "38秒",
            },
            {
              value: "39",
              label: "39秒",
            },
            {
              value: "40",
              label: "40秒",
            },
            {
              value: "41",
              label: "41秒",
            },
            {
              value: "42",
              label: "42秒",
            },
            {
              value: "43",
              label: "43秒",
            },
            {
              value: "44",
              label: "44秒",
            },
            {
              value: "45",
              label: "45秒",
            },
            {
              value: "46",
              label: "46秒",
            },
            {
              value: "47",
              label: "47秒",
            },
            {
              value: "48",
              label: "48秒",
            },
            {
              value: "49",
              label: "49秒",
            },
            {
              value: "50",
              label: "50秒",
            },
            {
              value: "51",
              label: "51秒",
            },
            {
              value: "52",
              label: "52秒",
            },
            {
              value: "53",
              label: "53秒",
            },
            {
              value: "54",
              label: "54秒",
            },
            {
              value: "55",
              label: "55秒",
            },
            {
              value: "56",
              label: "56秒",
            },
            {
              value: "57",
              label: "57秒",
            },
            {
              value: "58",
              label: "58秒",
            },
            {
              value: "59",
              label: "59秒",
            },
          ],
        },
        {
          value: "15",
          label: "15分",
          children: [
            {
              value: "00",
              label: "00秒",
            },
          ],
        },
      ],
      // 国家
      guojia: {
        AF: "阿富汗",
        AL: "阿尔巴尼亚",
        DZ: "阿尔及利亚",
        AS: "东萨摩亚",
        AD: "安道尔",
        AO: "安哥拉",
        Av: "安圭拉岛",
        AQ: "南极洲",
        AG: "安提瓜和巴布达",
        AR: "阿根廷",
        AM: "亚美尼亚",
        AA: "阿鲁巴",
        AU: "澳大利亚",
        AT: "奥地利",
        AZ: "阿塞拜疆",
        BH: "巴林",
        BB: "巴巴多斯",
        BD: "孟加拉",
        BY: "白俄罗斯",
        BE: "比利时",
        BZ: "伯里兹",
        BJ: "贝宁",
        BM: "百慕大",
        BS: "巴哈马",
        BT: "不丹",
        BW: "博茨瓦纳",
        BO: "玻利维亚",
        BA: "波黑",
        BV: "布韦岛",
        BR: "巴西",
        IO: "英属印度洋领地",
        BN: "文莱布鲁萨兰",
        BG: "保加利亚",
        BF: "布基纳法索",
        BI: "布隆迪",
        KH: "柬埔寨",
        CB: "柬埔寨",
        CM: "喀麦隆",
        CA: "加拿大",
        CV: "佛得角",
        KY: "开曼群岛",
        CF: "中非",
        TD: "乍得",
        CL: "智利",
        CN: "中国",
        CX: "圣诞岛",
        CC: "可可斯群岛",
        CO: "哥伦比亚",
        KM: "科摩罗",
        CD: "刚果",
        CK: "库克群岛",
        CR: "哥斯达黎加",
        CI: "象牙海岸",
        HR: "克罗地亚",
        CU: "古巴",
        CY: "塞普路斯",
        CZ: "捷克",
        CS: "捷克斯洛伐克",
        DK: "丹麦",
        DJ: "吉布提",
        DM: "多米尼加共和国",
        DO: "多米尼加联邦",
        TP: "东帝汶",
        EC: "厄瓜多尔",
        EG: "埃及",
        SV: "萨尔瓦多",
        GQ: "赤道几内亚",
        ER: "厄立特里亚",
        EE: "爱沙尼亚",
        ET: "埃塞俄比亚",
        FK: "福兰克群岛",
        FO: "法罗群岛",
        FJ: "斐济",
        FI: "芬兰",
        FR: "法国",
        GF: "法属圭亚那",
        PF: "法属玻里尼西亚",
        TF: "法国南部领地",
        MK: "马其顿",
        GA: "加蓬",
        GM: "冈比亚",
        GE: "格鲁吉亚",
        DE: "德国",
        GH: "加纳",
        GI: "直布罗陀",
        GB: "英国",
        GR: "希腊",
        GL: "格陵兰岛",
        GD: "格林纳达",
        GP: "法属德洛普群岛",
        GU: "关岛",
        GT: "危地马拉",
        GN: "几内亚",
        GW: "几内亚比绍",
        GY: "圭亚那",
        HT: "海地",
        HM: "赫德和麦克唐纳群岛",
        HN: "洪都拉斯",
        HK: "中国香港特区",
        HU: "匈牙利",
        IS: "冰岛",
        IN: "印度",
        ID: "印度尼西亚",
        IR: "伊朗",
        IQ: "伊拉克",
        IE: "爱尔兰",
        IL: "以色列",
        IT: "意大利",
        JM: "牙买加",
        JP: "日本",
        JO: "约旦",
        KZ: "哈萨克斯坦",
        KE: "肯尼亚",
        KI: "基里巴斯",
        KP: "朝鲜",
        KR: "韩国",
        KW: "科威特",
        KG: "吉尔吉斯斯坦",
        LA: "老挝",
        LV: "拉托维亚",
        LB: "黎巴嫩",
        LI: "列支顿士登",
        LR: "利比里亚",
        LY: "利比亚",
        LS: "莱索托",
        LT: "立陶宛",
        LU: "卢森堡",
        MO: "中国澳门特区",
        MG: "马达加斯加",
        MW: "马拉维",
        MY: "马来西亚",
        MV: "马尔代夫",
        ML: "马里",
        MT: "马耳他",
        MH: "马绍尔群岛",
        MQ: "法属马提尼克群岛",
        MR: "毛里塔尼亚",
        MU: "毛里求斯",
        YT: "马约特",
        MX: "墨西哥",
        FM: "米克罗尼西亚",
        MC: "摩纳哥",
        MD: "摩尔多瓦",
        MA: "摩洛哥",
        MN: "蒙古",
        MS: "蒙塞拉特岛",
        MZ: "莫桑比克",
        MM: "缅甸",
        NA: "纳米比亚",
        NR: "瑙鲁",
        NP: "尼泊尔",
        NL: "荷兰",
        AN: "荷属安德列斯",
        NT: "中立区（沙特-伊拉克间",
        NC: "新卡里多尼亚",
        NZ: "新西兰",
        NI: "尼加拉瓜",
        NE: "尼日尔",
        NG: "尼日利亚",
        NU: "纽爱",
        NF: "诺福克岛",
        MP: "北马里亚纳群岛",
        NO: "挪威",
        OM: "阿曼",
        PK: "巴基斯坦",
        PW: "帕劳",
        PA: "巴拿马",
        PG: "巴布亚新几内亚",
        PY: "巴拉圭",
        PE: "秘鲁",
        PH: "菲律宾",
        PN: "皮特克恩岛",
        PL: "波兰",
        PT: "葡萄牙",
        PR: "波多黎各",
        QA: "卡塔尔",
        RE: "法属尼留旺岛",
        RO: "罗马尼亚",
        RU: "俄罗斯",
        RW: "卢旺达",
        KN: "圣基茨和尼维斯",
        LC: "圣卢西亚",
        VC: "圣文森特和格陵纳丁斯",
        WS: "西萨摩亚",
        SM: "圣马力诺",
        ST: "圣多美和普林西比",
        SA: "沙特阿拉伯",
        SN: "塞内加尔",
        SC: "塞舌尔",
        SL: "塞拉利昂",
        SG: "新加坡",
        SI: "斯罗文尼亚",
        SK: "斯洛伐克",
        Sb: "所罗门群岛",
        SO: "索马里",
        ZA: "南非",
        ES: "西班牙",
        LK: "斯里兰卡",
        PM: "圣皮艾尔和密克隆群岛",
        SD: "苏丹",
        SR: "苏里南",
        SJ: "斯瓦尔巴特和扬马延岛",
        SZ: "斯威士兰",
        SE: "瑞典",
        CH: "瑞士",
        SY: "叙利亚",
        TW: "中国台湾省",
        TJ: "塔吉克斯坦",
        TZ: "坦桑尼亚",
        TH: "泰国",
        TG: "多哥",
        TK: "托克劳群岛",
        TO: "汤加",
        TT: "特立尼达和多巴哥",
        TN: "突尼斯",
        TR: "土尔其",
        TM: "土库曼斯坦",
        TC: "特克斯和凯科斯群岛",
        TV: "图瓦卢",
        UG: "乌干达",
        UA: "乌克兰",
        AE: "阿联酋",
        UK: "英国",
        US: "美国",
        UM: "美国海外领地",
        UY: "乌拉圭",
        SU: "前苏联",
        UZ: "乌兹别克斯坦",
        VU: "瓦努阿鲁",
        VA: "梵蒂岗",
        VE: "委内瑞拉",
        VN: "越南",
        VG: "英属维京群岛",
        VI: "美属维京群岛",
        WF: "瓦里斯和福图纳群岛",
        EH: "西撒哈拉",
        YE: "也门",
        YU: "南斯拉夫",
        ZM: "赞比亚",
        ZR: "扎伊尔",
        ZW: "津巴布韦",
      },
      // 创作日期限制
      pickercreativeTime: {
        disabledDate(time) {
          return time.getTime() < 1514694014900 - 8.64e6; //如果没有后面的-8.64e6就是不可以选择今天的
        },
      },
      // 顶部导航背景图片配置
      background: {
        // 背景图片地址
        backgroundImage: "url(" + require("../assets/images/map-bg.png") + ")",
        // 背景图片是否重复
        backgroundRepeat: "no-repeat",
        // 背景图片大小
        backgroundSize: "cover",
        // 背景图片位置
        backgroundPosition: "0px 0px",
        backgroundAttachment: "fixed",
        userForm: {
          email: "ln15139592853@163.com",
        },
      },

      form1: {
        participantName: "",
        participantNameEng: "",
        gender: "",
        nationality: "",
        birthDate: "",
        age: "",
        productionName: "",
        productionNameEng: "",
        productionDuration: "",
        creativeTime: "",
        email: "",
        phone: "",
        address: "",
        joinNumber: "",
        instrumentEstablishment: "",
        school: "",
        educationHistory: "",
        award: "",
        productionSynopsis: "",
        photo: "",
        card: "",
        bio: "",
        diplomaCertificate: "",
        awardThat: "",
        otherMaterial: "",
        entriesScore: "",
        entriesAudio: "",
      },
      // 表单数据
      email: {},
      dialogFormVisible: false,
      // 表格数据
      ruleForm: {
        participantName: "",
        participantNameEng: "",
        gender: "",
        nationality: "",
        birthDate: "",
        age: "",
        productionName: "",
        productionNameEng: "",
        productionDuration: "",
        creativeTime: "",
        email: "",
        phone: "",
        address: "",
        joinNumber: "",
        instrumentEstablishment: "",
        school: "",
        educationHistory: "",
        award: "",
        productionSynopsis: "",
        photo: "",
        card: "",
        bio: "",
        diplomaCertificate: "",
        awardThat: "",
        otherMaterial: "",
        entriesScore: "",
        entriesAudio: "",
      },
      options: [
        { value: "选项1", name: "2020-2022年第六期" },
        { value: "选项2", name: "2018-2019年第五期" },
        { value: "选项3", name: "2016-2017年第四期" },
        { value: "选项4", name: "2014-2015年第三期" },
        { value: "选项5", name: "2012-2013年第二期" },
        { value: "选项6", name: "2011年第一期" },
      ],
      value1: [],
      value2: [],
      rules: {
        participantName: [
          { required: true, message: "请输入中文姓名", trigger: "blur" },
        ],
        participantNameEng: [
          { required: true, message: "请输入拼音全拼/英文名", trigger: "blur" },
        ],
        gender: [{ required: true, message: "请选择性别", trigger: "blur" }],
        nationality: [
          { required: true, message: "请选择中文国际名称", trigger: "blur" },
        ],
        age: [{ required: true, message: "请选择出生日期", trigger: "blur" }],
        birthDate: [
          { required: true, message: "请选择出生日期", trigger: "blur" },
        ],
        productionName: [
          { required: true, message: "请输入作品名称", trigger: "blur" },
        ],
        productionNameEng: [
          {
            required: true,
            validator: checkproductionNameEng,
          },
        ],
        creativeTime: [
          { required: true, message: "请选择作品创作日期", trigger: "blur" },
        ],
        address: [
          { required: true, message: "请输入您的通讯地址", trigger: "blur" },
        ],
        joinNumber: [
          { required: true, message: "请选择您的参加次数", trigger: "blur" },
        ],
        instrumentEstablishment: [
          { required: true, message: "请填写您的乐器编制", trigger: "blur" },
        ],
        school: [
          {
            required: true,
            message: "现在读学校/现工作单位/自由职业",
            trigger: "blur",
          },
        ],
        educationHistory: [
          { required: true, message: "请填写您的教育经历", trigger: "blur" },
        ],
        award: [
          { required: true, message: "请填写您的获奖情况", trigger: "blur" },
        ],
        productionSynopsis: [
          { required: true, message: "请填写您的作品简介", trigger: "blur" },
        ],
        email: [
          {
            required: true,
            validator: checkEmail,
          },
        ],
        phone: [
          {
            required: true,
            validator: checkPhone,
          },
        ],
        productionDuration: [
          {
            required: true,
            message: "请选择您的作品时间",
            trigger: "blur",
          },
        ],
      },
      photo: "",
      // 设置服务器地址等
      Setting: Setting,
      fileList: [],
      resumeList: [],
      OfficialTranscriptList: [],
      awardThatList: [],
      otherMaterialList: [],
      originalScoreList: [],
      musicList: [],
      formLabelWidth: "120px",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  created() {},
  //方法集合
  methods: {
    // 国籍的操作
    nationalityBlur() {
      let arr = this.form1.nationality;
      let arr1 = "";
      for (let key in this.guojia) {
        if (arr == this.guojia[key]) {
          arr1 = key;
        }
      }
      if (this.guojia.hasOwnProperty(arr1) == true) {
        console.log("存在");
      } else {
        this.form1.nationality = "";
        this.$message({
          showClose: true,
          message: "请您输入正确的中文国际名称",
          type: "warning",
        });
      }
    },

    // querySearch(queryString, cb) {
    //   var restaurants = this.restaurants;
    //   var results = queryString
    //     ? restaurants.filter(this.createFilter(queryString))
    //     : restaurants;
    //   // 调用 callback 返回建议列表的数据
    //   cb(results);
    // },
    // createFilter(queryString) {
    //   return (restaurant) => {
    //     return (
    //       restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
    //       0
    //     );
    //   };
    // },
    // loadAll() {
    //   return [
    //     { value: "中国"},
    //     { value: "美国"},
    //     { value: "朝鲜"},
    //     { value: "韩国"},
    //     { value: "俄罗斯"},
    //     { value: "英国"},
    //   ];
    // },
    // handleSelect(item) {
    //   console.log(item);
    // },
    // 获取年龄
    impose1() {
      let value = this.filterTime(this.form1.birthDate);
      let value1 = this.mymethod(value);
      this.form1.age = value1;
    },
    mymethod(birthday) {
      //根据日期算年龄
      if (birthday) {
        birthday = birthday.split("-");
        // 新建日期对象
        let date = new Date();
        // 今天日期，数组，同 birthday
        let today = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
        // 分别计算年月日差值
        let age = today.map((val, index) => {
          return val - birthday[index];
        });
        // 当天数为负数时，月减 1，天数加上月总天数
        if (age[2] < 0) {
          // 简单获取上个月总天数的方法，不会错
          let lastMonth = new Date(today[0], today[1], 0);
          age[1]--;
          age[2] += lastMonth.getDate();
        }
        // 当月数为负数时，年减 1，月数加上 12
        if (age[1] < 0) {
          age[0]--;
          age[1] += 12;
        }
        return age[0];
        // console.log(age[0]+'岁'+age[1]+'月'+age[2]+'天');
      }
    },
    // 文本域字数的限制
    impose() {
      let tetVal = this.form1.productionSynopsis.length;
      this.num = 300 - tetVal;
    },
    // 表单重置
    reset() {
      this.form1 = {
        participantName: "",
        participantNameEng: "",
        gender: "",
        nationality: "",
        birthDate: null,
        age: null,
        productionName: null,
        productionNameEng: "",
        productionDuration: null,
        creativeTime: null,
        email: null,
        phone: null,
        address: null,
        joinNumber: null,
        instrumentEstablishment: null,
        school: null,
        educationHistory: null,
        award: null,
        productionSynopsis: null,
        photo: null,
        card: null,
        bio: null,
        diplomaCertificate: null,
        awardThat: null,
        otherMaterial: null,
        entriesScore: null,
        entriesAudio: null,
      };
    },
    //   获取用户信息
    getuser() {
      inquire({ email: this.email }).then((res) => {
        this.ruleForm = res;
        let arr = this.ruleForm.nationality;
        for (let key in this.guojia) {
          if (arr == key) {
            this.ruleForm.nationality = this.guojia[key];
          }
        }
      });
    },
    // 取消按钮
    cancel() {
      this.dialogFormVisible = false;
      this.reset();
    },
    duibi() {
      this.form1.participantName = this.ruleForm.participantName;
      this.form1.participantNameEng = this.ruleForm.participantNameEng;
      this.form1.gender = this.ruleForm.gender;
      this.form1.nationality = this.ruleForm.nationality;
      this.form1.birthDate = this.ruleForm.birthDate;
      this.form1.age = this.ruleForm.age;
      this.form1.productionName = this.ruleForm.productionName;
      this.form1.productionNameEng = this.ruleForm.productionNameEng;
      this.form1.productionDuration = this.ruleForm.productionDuration;
      this.form1.creativeTime = this.ruleForm.creativeTime;
      this.form1.email = this.ruleForm.email;
      this.form1.phone = this.ruleForm.phone;
      this.form1.address = this.ruleForm.address;
      this.form1.joinNumber = this.ruleForm.joinNumber;
      this.form1.instrumentEstablishment =
        this.ruleForm.instrumentEstablishment;
      this.form1.school = this.ruleForm.school;
      this.form1.educationHistory = this.ruleForm.educationHistory;
      this.form1.award = this.ruleForm.award;
      this.form1.productionSynopsis = this.ruleForm.productionSynopsis;
      this.form1.photo = this.ruleForm.photo;
      this.form1.card = this.ruleForm.card;
      this.form1.bio = this.ruleForm.bio;
      this.form1.diplomaCertificate = this.ruleForm.diplomaCertificate;
      this.form1.awardThat = this.ruleForm.awardThat;
      this.form1.otherMaterial = this.ruleForm.otherMaterial;
      this.form1.entriesScore = this.ruleForm.entriesScore;
      this.form1.entriesAudio = this.ruleForm.entriesAudio;
    },
    // 修改
    handleUpdate() {
      // 获取结束时间
      var date1 = new Date("2022/10/01 00:00:00");
      // 获取当前时间
      var date2 = new Date();
      // 获取一下当前时间到结束时间的差的毫秒数
      var mill = date1 - date2;
      if (mill >= 0) {
        this.dialogFormVisible = true;
        // this.reset();
        this.duibi();
        this.form1.productionDuration = null;
        this.form1.joinNumber = null;
        this.impose();
        if (this.form1.gender == "0") {
          this.form1.gender = "男";
        } else {
          this.form1.gender = "女";
        }

        // if (this.form1.nationality == "CN") {
        //   this.form1.nationality = "中国";
        // } else if (this.form1.nationality == "US") {
        //   this.form1.nationality = "美国";
        // } else if (this.form1.nationality == "JPN") {
        //   this.form1.nationality = "日本";
        // } else if (this.form1.nationality == "KP") {
        //   this.form1.nationality = "日本";
        // } else if (this.form1.nationality == "KR") {
        //   this.form1.nationality = "韩国";
        // } else if (this.form1.nationality == "RUS") {
        //   this.form1.nationality = "俄罗斯";
        // } else if (this.form1.nationality == "UK") {
        //   this.form1.nationality = "英国";
        // }
      } else {
        this.$message({
          showClose: true,
          message: "报名已结束,不能进行修改",
          type: "warning",
        });
      }
    },
    // 修改提交
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.dialogFormVisible = false;
          if (this.form1.gender == "男") {
            this.form1.gender = "0";
          } else {
            this.form1.gender = "1";
          }

          let arr = this.form1.nationality;
          for (let key in this.guojia) {
            if (arr == this.guojia[key]) {
              this.form1.nationality = key;
            }
          }

          // 参加次数的拼接
          this.form1.joinNumber = this.form1.joinNumber
            .map((item) => item)
            .join(",");
          // console.log(this.form.joinNumber);

          // 改变作品时长的格式
          this.form1.productionDuration = this.form1.productionDuration
            .map((item) => item)
            .join("''");
          console.log("作品时长" + this.form1.productionDuration);

          // 时间
          this.form1.birthDate = this.filterTime(this.form1.birthDate);

          this.form1.creativeTime = this.filterTime(this.form1.creativeTime);
          console.log(this.form1);
          // ------------------------------------------------------------------------------------------------------------------------------------------------------
          updateParticipant(this.form1).then((res) => {
            if (res.msg == "操作成功") {
              this.getuser();
              this.$message({
                showClose: true,
                message: "修改成功",
                type: "warning",
              });
              this.email = this.form1.email;
              getuser();
              this.reset();
            }
          });
          // --------------------------------------------------------------------------------------------------------------------------------------------------------
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    clk() {
      console.log(this.ruleForm.joinNumber);
    },
    filterTime(time) {
      var date = new Date(time);
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      var d = date.getDate();
      d = d < 10 ? "0" + d : d;
      var h = date.getHours();
      h = h < 10 ? "0" + h : h;
      var minute = date.getMinutes();
      minute = minute < 10 ? "0" + minute : minute;
      var s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return y + "-" + m + "-" + d;
    },
    // 头像图片上传成功的处理
    handleAvatarSuccess(res, file) {
      console.log(res);
      console.log(file);
      this.form1.photo = res;
      // this.photo = URL.createObjectURL(file.raw);
    },
    // 头像上传之前的验证
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },

    // 成功上传到服务器后返回的内容
    uploadSuccess(e) {
      console.log("上传成功", e);
      this.form1.card = e;
    },
    // 上传文件到服务器
    submitUpload() {
      // console.log('我要上传了',e);
      this.$refs.upload.submit();
    },
    // 删除文件
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-1);
    },

    // 个人简历 上传
    resumeSuccess(e) {
      console.log("上传成功", e);
      this.form1.card = e;
    },
    resumeUpload() {
      this.$refs.resume.submit();
    },
    resumeRemove(file, resumeList) {
      console.log(file, resumeList);
    },
    resumeChange(file, resumeList) {
      this.resumeList = resumeList.slice(-1);
    },

    // 学历证明材料 上传
    OfficialTranscriptSuccess(e) {
      console.log("上传成功", e);
      this.form1.diplomaCertificate = e;
      // console.log(this.ruleForm.OfficialTranscript);
    },
    OfficialTranscriptUpload() {
      this.$refs.OfficialTranscript.submit();
    },
    OfficialTranscriptRemove(file, OfficialTranscriptList) {
      console.log(file, OfficialTranscriptList);
    },
    OfficialTranscriptChange(file, OfficialTranscriptList) {
      this.OfficialTranscriptList = OfficialTranscriptList.slice(-1);
    },

    // 获奖证明材料 上传
    AwardSuccess(e) {
      this.form1.awardThat = e;
    },
    AwardUpload() {
      this.$refs.awardThat.submit();
    },
    AwardRemove(file, AwardList) {
      console.log(file, AwardList);
    },
    AwardChange(file, awardThatList) {
      this.AwardList = awardThatList.slice(-1);
    },

    // 其他说明性材料材料 上传
    otherMaterialSuccess(e) {
      this.form1.otherMaterial = e;
    },
    otherMaterialUpload() {
      this.$refs.otherMaterial.submit();
    },
    otherMaterialRemove(file, otherMaterialList) {
      console.log(file, otherMaterialList);
    },
    otherMaterialChange(file, otherMaterialList) {
      this.AwardList = otherMaterialList.slice(-1);
    },

    // 参选作品总谱 上传
    originalScoreSuccess(e) {
      this.form1.entriesScore = e;
    },
    originalScoreUpload() {
      this.$refs.originalScore.submit();
    },
    originalScoreRemove(file, originalScoreList) {
      console.log(file, originalScoreList);
    },
    originalScoreChange(file, originalScoreList) {
      this.originalScoreList = originalScoreList.slice(-1);
    },

    // 参选作品音频 上传
    musicSuccess(e) {
      this.form1.entriesAudio = e;
    },
    musicUpload() {
      this.$refs.music.submit();
    },
    musicRemove(file, musicList) {
      console.log(file, musicList);
    },
    musicChange(file, musicList) {
      const isLt2M = file.size / 1024 / 1024 / 150 <= 1;
      if (!isLt2M) {
        this.yinpin = true;
        this.$message.error("上传音频大小不能超过 150MB!");
      } else {
        this.yinpin = false;
        this.musicList = musicList.slice(-1);
      }
    },

    async loginOut() {
      this.$confirm("确定注销并退出系统吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$store.dispatch("LogOut").then(() => {
            sessionStorage.removeItem("username");
            sessionStorage.removeItem("sessionObj");
            location.href = "/aboutUs";
          });
        })
        .catch(() => {});
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    var username = sessionStorage.getItem("username");
    var num = Cookies.get("Admin-Token");

    if (username == null || num == undefined) {
      Cookies.remove("Admin-Token");
      this.flag = false;
    } else {
      this.flag = true;
      this.email = sessionStorage.getItem("username");
      this.getuser();
      this.restaurants = this.loadAll();
    }
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.section1 {
  width: 100%;
  height: 220%;
  background: rgba(55, 55, 55, 0.8) url("../assets/images/map-bg.png") no-repeat
    222px 100px;
  background-attachment: fixed;
  background-size: 1110px;
  .container1 {
    width: calc(100% - 700px);
    margin: 0 350px;
    height: calc(100% - 190px);
    display: flex;
    justify-content: center;
    h2 {
      text-align: center;
      margin: 50px;
      font-size: 30px;
    }
  }
  .section-body1 {
    color: #fff;
    .xiugai {
      margin-bottom: 5px;
    }
  }
}
.table1 {
  background-color: rgba(250, 250, 250, 0.8);
  color: #000;
  border-color: #999;
  text-align: center;
  border-collapse:collapse;
  border:none;
  border-collapse: separate;
  border-spacing: 0;
  td {
    padding: 15px;
    border:solid #000 1px;
    img {
      width: 100%;
    }
  }
}
.huanhang {
  white-space: normal;
  word-break: break-all;
  overflow: hidden;
}

// 用户头像
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 80px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 80px;
  height: 100px;
  display: block;
}
.el-select-dropdown__list {
  height: 140px;
  overflow: auto;
}
.form1 .el-form-item__error {
  width: 200px !important;
}
.form1 .el-form-item__label {
  width: 150px !important;
}
.form1 .hebing .el-form-item__label {
  width: 250px !important;
}
.pdf .el-form-item__label {
  width: 180px !important;
}
.form1 .el-form-item__content {
  margin-left: 150px !important;
}
.pdf .el-form-item__content {
  margin-left: 200px !important;
}
.pdf .el-upload-list__item-name {
  color: #999;
  width: 400px;
}
.pdf .el-upload-list__item-name:hover {
  color: #000 !important;
}
.form1 .el-input--medium {
  width: 550px !important;
}
.form1 .el-date-editor--date {
  width: 220px !important;
}
.form1 .el-select--medium .el-input--suffix {
  width: 220px !important;
}
.el-textarea__inner {
  height: 150px;
}
.form1 .joinNumber .el-input--medium {
  width: 550px !important;
}
.form1 .photo-txt {
  color: #999;
  width: 80%;
  position: absolute;
  top: 10px;
  right: 15px;
}
.dialog-footer {
  display: flex;
  flex-direction: column;
}
.footer-primary {
  width: 100% !important;
  margin: 0px 0px 20px 10px;
  background-color: #20f05e;
  border-color: #20f05e;
}
.footer-reset {
  width: 100% !important;
}
.pdf .card {
  position: absolute;
  top: 0;
  font-weight: 700;
  left: -133px;
}
.form1 .impose {
  position: absolute;
  top: 188px;
  right: 38px;
  color: #999;
  z-index: 99;
}
.form1 .el-upload__tip {
  color: #999 !important;
}
.form1 .nationality-txt {
  color: orange;
  margin-left: 150px;
}
.table1 .td-header {
  font-size: 20px;
}
.table1 .bianhao {
  position: absolute;
  top: 35%;
  right: 10px;
}
// 国籍的提示框高度限制
.el-scrollbar {
  height: 160px;
}
</style>