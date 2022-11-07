/**
 * 该文件仅供Babel读取生产对应的fk tree
 * !!!不可以直接执行!!!
 * @description 当ecp搭建新的平台时, 将ecp返回的内容粘贴到此处
 */
$(function () {
  $("#platform").change(function () {
    var platform = $("#platform option:selected").text();
    var contents = "<option value=''>全部</option>";

    if (platform == "河北建投") {
      contents =
        contents +
        "<option value='14058'>" +
        "河北建投集团-采集端-appapi" +
        "</option>";

      contents =
        contents +
        "<option value='14059'>" +
        "河北建投集团-核证端-appapi" +
        "</option>";

      contents =
        contents +
        "<option value='14060'>" +
        "河北建投集团-资金端-appapi" +
        "</option>";

      contents =
        contents +
        "<option value='14061'>" +
        "河北建投集团-上链端-api" +
        "</option>";

      contents =
        contents +
        "<option value='14062'>" +
        "河北建投集团-采集端-frontend" +
        "</option>";

      contents =
        contents +
        "<option value='14063'>" +
        "河北建投集团-核证端-frontend" +
        "</option>";

      contents =
        contents +
        "<option value='14064'>" +
        "河北建投集团-资金端-frontend" +
        "</option>";

      contents =
        contents +
        "<option value='14076'>" +
        "河北建投集团-运营端-appapi" +
        "</option>";

      contents =
        contents +
        "<option value='14077'>" +
        "河北建投集团-运营端-frontend" +
        "</option>";

      contents =
        contents +
        "<option value='14082'>" +
        "河北建投集团-采集端-app" +
        "</option>";

      contents =
        contents +
        "<option value='14086'>" +
        "河北建投集团-数据中台-采集服务" +
        "</option>";

      contents =
        contents +
        "<option value='14088'>" +
        "河北建投集团-数据中台-计算服务" +
        "</option>";

      contents =
        contents +
        "<option value='14089'>" +
        "河北建投集团-数据中台-管理服务" +
        "</option>";

      contents =
        contents +
        "<option value='14090'>" +
        "河北建投集团-数据中台-API服务" +
        "</option>";
    }

    if (platform == "云图") {
      contents =
        contents +
        "<option value='14009'>" +
        "中小企业融资平台api" +
        "</option>";

      contents =
        contents +
        "<option value='14010'>" +
        "中小企业融资平台资金端" +
        "</option>";

      contents =
        contents +
        "<option value='14011'>" +
        "中小企业融资平台管理端" +
        "</option>";

      contents =
        contents +
        "<option value='14013'>" +
        "中小企业融资平台资产上链" +
        "</option>";

      contents =
        contents +
        "<option value='14014'>" +
        "中小企业融资平台资产app接口" +
        "</option>";

      contents =
        contents +
        "<option value='14015'>" +
        "中小企业融资平台资产app" +
        "</option>";

      contents =
        contents + "<option value='14016'>" + "云图资金前端" + "</option>";

      contents =
        contents + "<option value='14017'>" + "云图运营前端" + "</option>";

      contents =
        contents + "<option value='14018'>" + "云图APP前端" + "</option>";
    }

    if (platform == "基础服务") {
      contents =
        contents + "<option value='14047'>" + "canal客户端" + "</option>";

      contents =
        contents + "<option value='14081'>" + "seata服务端" + "</option>";
    }

    if (platform == "成都平台") {
      contents =
        contents +
        "<option value='14040'>" +
        "成都-核心企业-票代-app" +
        "</option>";

      contents =
        contents +
        "<option value='14041'>" +
        "成都-核心企业-票代-appapi" +
        "</option>";
    }

    if (platform == "祺鲲平台") {
      contents =
        contents +
        "<option value='14046'>" +
        "祺鲲-大平台-appapi" +
        "</option>";

      contents =
        contents +
        "<option value='14069'>" +
        "祺鲲中小电站-采集端-appapi" +
        "</option>";

      contents =
        contents +
        "<option value='14070'>" +
        "祺鲲中小电站-核证端-appapi" +
        "</option>";

      contents =
        contents +
        "<option value='14071'>" +
        "祺鲲中小电站-资金端-appapi" +
        "</option>";

      contents =
        contents +
        "<option value='14072'>" +
        "祺鲲中小电站-上链端-api" +
        "</option>";

      contents =
        contents +
        "<option value='14073'>" +
        "祺鲲中小电站-采集端-frontend" +
        "</option>";

      contents =
        contents +
        "<option value='14074'>" +
        "祺鲲中小电站-核证端-frontend" +
        "</option>";

      contents =
        contents +
        "<option value='14075'>" +
        "祺鲲中小电站-资金端-frontend" +
        "</option>";

      contents =
        contents +
        "<option value='14079'>" +
        "祺鲲中小电站-运营端-appapi" +
        "</option>";

      contents =
        contents +
        "<option value='14080'>" +
        "祺鲲中小电站-运营端-frontend" +
        "</option>";

      contents =
        contents +
        "<option value='14083'>" +
        "祺鲲中小电站-采集端-app" +
        "</option>";

      contents =
        contents +
        "<option value='14087'>" +
        "祺鲲中小电站-数据中台-采集服务" +
        "</option>";

      contents =
        contents +
        "<option value='14091'>" +
        "祺鲲中小电站-数据中台-计算服务" +
        "</option>";

      contents =
        contents +
        "<option value='14092'>" +
        "祺鲲中小电站-数据中台-管理服务" +
        "</option>";

      contents =
        contents +
        "<option value='14093'>" +
        "祺鲲中小电站-数据中台-API服务" +
        "</option>";
    }

    if (platform == "青岛平台") {
      contents =
        contents + "<option value='14019'>" + "青岛-平台-网关" + "</option>";

      contents =
        contents +
        "<option value='14020'>" +
        "青岛-平台-运营-appapi" +
        "</option>";

      contents =
        contents +
        "<option value='14022'>" +
        "青岛-平台-运营-app" +
        "</option>";

      contents =
        contents +
        "<option value='14023'>" +
        "青岛-平台-运营-前端" +
        "</option>";

      contents =
        contents +
        "<option value='14025'>" +
        "青岛-核心企业-票代-appapi" +
        "</option>";

      contents =
        contents +
        "<option value='14027'>" +
        "青岛-平台-上链服务" +
        "</option>";

      contents =
        contents +
        "<option value='14028'>" +
        "青岛-核心企业-农业-appapi" +
        "</option>";

      contents =
        contents +
        "<option value='14031'>" +
        "平台-中心企业资金端-api" +
        "</option>";

      contents =
        contents +
        "<option value='14032'>" +
        "平台-中心企业资金端-前端" +
        "</option>";

      contents =
        contents +
        "<option value='14033'>" +
        "青岛-核心企业-票代-真旅-app" +
        "</option>";

      contents =
        contents +
        "<option value='14034'>" +
        "青岛-核心企业-票代-玉泰-app" +
        "</option>";

      contents =
        contents +
        "<option value='14035'>" +
        "青岛-核心企业-农业-云图-app" +
        "</option>";

      contents =
        contents +
        "<option value='14036'>" +
        "青岛-核心企业-农业-恩宝-app" +
        "</option>";

      contents =
        contents +
        "<option value='14037'>" +
        "青岛-核心企业-冷链-appapi" +
        "</option>";

      contents =
        contents +
        "<option value='14038'>" +
        "青岛-核心企业-冷链-app" +
        "</option>";

      contents =
        contents +
        "<option value='14039'>" +
        "青岛-核心企业-医疗-appapi" +
        "</option>";

      contents =
        contents +
        "<option value='14078'>" +
        "青岛-核心企业-建材-appapi" +
        "</option>";
    }

    if (platform == "碳中和") {
      contents =
        contents +
        "<option value='14048'>" +
        "碳中和-核心企业-采集端-appapi" +
        "</option>";

      contents =
        contents +
        "<option value='14049'>" +
        "碳中和-核心企业-采集端-frontend" +
        "</option>";

      contents =
        contents +
        "<option value='14050'>" +
        "碳中和-核心企业-上链端-api" +
        "</option>";

      contents =
        contents +
        "<option value='14051'>" +
        "碳中和-核心企业-资金端-api" +
        "</option>";

      contents =
        contents +
        "<option value='14054'>" +
        "碳中和-核心企业-资金端-frontend" +
        "</option>";

      contents =
        contents +
        "<option value='14053'>" +
        "碳中和-核心企业-审定端-frontend" +
        "</option>";

      contents =
        contents +
        "<option value='14052'>" +
        "碳中和-核心企业-审定端-后端" +
        "</option>";
    }

    if (platform == "河北平台") {
      contents =
        contents +
        "<option value='14084'>" +
        "河北平台-采集端-appapi" +
        "</option>";

      contents =
        contents +
        "<option value='14085'>" +
        "河北平台-采集端-frontend" +
        "</option>";

      contents =
        contents +
        "<option value='14094'>" +
        "河北平台-上链端-api" +
        "</option>";

      contents =
        contents +
        "<option value='14095'>" +
        "河北平台-核证端-appapi" +
        "</option>";

      contents =
        contents +
        "<option value='14096'>" +
        "河北平台-资金端-appapi" +
        "</option>";

      contents =
        contents +
        "<option value='14097'>" +
        "河北平台-运营端-appapi" +
        "</option>";

      contents =
        contents +
        "<option value='14098'>" +
        "河北平台-核证端-frontend" +
        "</option>";

      contents =
        contents +
        "<option value='14099'>" +
        "河北平台-资金端-frontend" +
        "</option>";

      contents =
        contents +
        "<option value='14100'>" +
        "河北平台-运营端-frontend" +
        "</option>";
    }

    if (platform == "金保") {
      contents = contents + "<option value='14001'>" + "金保" + "</option>";

      contents =
        contents + "<option value='14004'>" + "ABS资金端" + "</option>";

      contents =
        contents + "<option value='14005'>" + "ABS资产端" + "</option>";

      contents =
        contents + "<option value='14006'>" + "ABS数据中心" + "</option>";

      contents = contents + "<option value='14007'>" + "ABSAPI" + "</option>";

      contents =
        contents + "<option value='14008'>" + "ABSPortal" + "</option>";

      contents =
        contents + "<option value='14012'>" + "kafka异步服务" + "</option>";
    }

    if (platform == "玉泰平台") {
      contents =
        contents +
        "<option value='14066'>" +
        "玉泰-核心企业-票代-appapi" +
        "</option>";

      contents =
        contents +
        "<option value='14067'>" +
        "玉泰-平台-上链服务" +
        "</option>";

      contents =
        contents +
        "<option value='14068'>" +
        "玉泰-核心企业-资金端-api" +
        "</option>";
    }

    if (platform == "武侯平台") {
      contents =
        contents +
        "<option value='14044'>" +
        "武侯-核心企业-医疗-appapi" +
        "</option>";

      contents =
        contents +
        "<option value='14045'>" +
        "武侯-中心企业资金端-前端" +
        "</option>";
    }

    if (platform == "江西平台") {
      contents =
        contents +
        "<option value='14055'>" +
        "江西-核心企业-铜业-运营端-front" +
        "</option>";

      contents =
        contents +
        "<option value='14056'>" +
        "江西-核心企业-铜业-资金端-front" +
        "</option>";

      contents =
        contents +
        "<option value='14057'>" +
        "江西-核心企业-铜业-资金端-api" +
        "</option>";

      contents =
        contents +
        "<option value='14065'>"
        + "江西-核心企业-铜业-APP-front"
        + "</option>";
    }

    $("#qkcp_fk").html(contents);
  });
  $("#platform").val("河北平台");
  $("#platform").change();
});
