
/*
  total : 전체 목록 개수, 
  listingCount : 리스트할 Row 개수, 
  currentPageNo : 현재 페이지 번호, 
  url : a 태그에 들어갈 URL {p} 부분에 페이지 번호가 입력(치환)되어 표시됨
*/
function paging(total, listingCount, currentPageNo, url) {
	
	var pageLinkCount = 10; // 하단 페이징 버튼 개수
	
	var pageEnd = Math.ceil(total / listingCount);  // 전체에서 마지막 페이지 번호

	if (currentPageNo > pageEnd) {
		currentPageNo = pageEnd;
	}

	var linkStart = Math.floor((currentPageNo - 1) / pageLinkCount) * pageLinkCount + 1;
	var linkEnd = (pageEnd - linkStart >= pageLinkCount) 
						? linkStart + pageLinkCount - 1 : pageEnd;
	
	if (total == 0) {
		linkStart = 0;
	}
	
	//console.log("pageLinkCount", pageLinkCount);
	//console.log("pageEnd", pageEnd);
	//console.log("listingCount", listingCount);
	//console.log("currentPageNo", currentPageNo);
	//console.log("linkStart", linkStart);
	//console.log("linkEnd", linkEnd);
	if(total != 0){

		var pagingHtml = "";
/*
		pagingHtml += "	<select name='listingCount' onchange='changeListSize(this.value)'>\n";
		pagingHtml += "		<option value='10'" + (listingCount == 10 ? " selected" : "") + ">10개</option>\n";
		pagingHtml += "		<option value='20'" + (listingCount == 20 ? " selected" : "") + ">20개</option>\n";
		pagingHtml += "		<option value='50'" + (listingCount == 50 ? " selected" : "") + ">50개</option>\n";
		pagingHtml += "		<option value='100'" + (listingCount == 100 ? " selected" : "") + ">100개</option>\n";
		pagingHtml += "	</select>\n";

		pagingHtml += "	<!-- paging -->\n";
		pagingHtml += "	<div class=\"paging\">\n";
	*/	
		if (linkStart > pageLinkCount) {
			pagingHtml += "		<a href=\"" + url.replace("{p}", (linkStart - 1) + "") + "\" class=\"prev\">이전</a>\n";
		}
		
		for (var i = linkStart; i <= linkEnd; i++) {
			if (i == currentPageNo) {
				pagingHtml += "		<a class=\"active\" id='pageNo'>" + i + "</a>\n";
			} else {
				pagingHtml += "		<a href=\"" + url.replace("{p}", i + "") + "\">" + i + "</a>\n";
			}
		}
		
		if (linkEnd < pageEnd) {
			pagingHtml += "		<a href=\"" + url.replace("{p}", (linkEnd + 1) + "") + "\" class=\"next\">다음</a>\n";
		}
	
		pagingHtml += "	</div>\n";
		pagingHtml += "	<!-- //paging -->\n";
	
		$("div.pagination").html(pagingHtml);
	
	}else{
		$("div.pagination").html("");
	}
}


/*
  total : 전체 목록 개수, 
  listingCount : 리스트할 Row 개수, 
  currentPageNo : 현재 페이지 번호, 
  url : a 태그에 들어갈 URL {p} 부분에 페이지 번호가 입력(치환)되어 표시됨
*/
function pagingPop(total, listingCount, currentPageNo, url, pagingDivId) {
	
	var pageLinkCount = 10; // 하단 페이징 버튼 개수
	
	var pageEnd = Math.ceil(total / listingCount);  // 전체에서 마지막 페이지 번호

	if (currentPageNo > pageEnd) {
		currentPageNo = pageEnd;
	}

	var linkStart = Math.floor((currentPageNo - 1) / pageLinkCount) * pageLinkCount + 1;
	var linkEnd = (pageEnd - linkStart >= pageLinkCount) 
						? linkStart + pageLinkCount - 1 : pageEnd;
	
	if (total == 0) {
		linkStart = 0;
	}
	
	//console.log("pageLinkCount", pageLinkCount);
	//console.log("pageEnd", pageEnd);
	//console.log("listingCount", listingCount);
	//console.log("currentPageNo", currentPageNo);
	//console.log("linkStart", linkStart);
	//console.log("linkEnd", linkEnd);
	if(total != 0){

		var pagingHtml = "";
/*
		pagingHtml += "	<select name='listingCount' onchange='changeListSize(this.value)'>\n";
		pagingHtml += "		<option value='10'" + (listingCount == 10 ? " selected" : "") + ">10개</option>\n";
		pagingHtml += "		<option value='20'" + (listingCount == 20 ? " selected" : "") + ">20개</option>\n";
		pagingHtml += "		<option value='50'" + (listingCount == 50 ? " selected" : "") + ">50개</option>\n";
		pagingHtml += "		<option value='100'" + (listingCount == 100 ? " selected" : "") + ">100개</option>\n";
		pagingHtml += "	</select>\n";

		pagingHtml += "	<!-- paging -->\n";
		pagingHtml += "	<div class=\"paging\">\n";
	*/	
		if (linkStart > pageLinkCount) {
			pagingHtml += "		<a href=\"" + url.replace("{p}", (linkStart - 1) + "") + "\" class=\"prev\">이전</a>\n";
		}
		
		for (var i = linkStart; i <= linkEnd; i++) {
			if (i == currentPageNo) {
				pagingHtml += "		<a class=\"active\" id='pageNo'>" + i + "</a>\n";
			} else {
				pagingHtml += "		<a href=\"" + url.replace("{p}", i + "") + "\">" + i + "</a>\n";
			}
		}
		
		if (linkEnd < pageEnd) {
			pagingHtml += "		<a href=\"" + url.replace("{p}", (linkEnd + 1) + "") + "\" class=\"next\">다음</a>\n";
		}
	
		pagingHtml += "	</div>\n";
		pagingHtml += "	<!-- //paging -->\n";
	
		$("#"+pagingDivId).html(pagingHtml);
	
	}else{
		$("#"+pagingDivId).html("");
	}
}

/*
  total : 전체 목록 개수, 
  listingCount : 리스트할 Row 개수, 
  currentPageNo : 현재 페이지 번호, 
  url : a 태그에 들어갈 URL {p} 부분에 페이지 번호가 입력(치환)되어 표시됨
*/
function pagingIdOnly(pagingDivId, total, listingCount, currentPageNo, url) {
	
	var pageLinkCount = 10; // 하단 페이징 버튼 개수
	
	var pageEnd = Math.ceil(total / listingCount);  // 전체에서 마지막 페이지 번호

	if (currentPageNo > pageEnd) {
		currentPageNo = pageEnd;
	}

	var linkStart = Math.floor((currentPageNo - 1) / pageLinkCount) * pageLinkCount + 1;
	var linkEnd = (pageEnd - linkStart >= pageLinkCount) 
						? linkStart + pageLinkCount - 1 : pageEnd;
	
	if (total == 0) {
		linkStart = 0;
	}
	
	//console.log("pageLinkCount", pageLinkCount);
	//console.log("pageEnd", pageEnd);
	//console.log("listingCount", listingCount);
	//console.log("currentPageNo", currentPageNo);
	//console.log("linkStart", linkStart);
	//console.log("linkEnd", linkEnd);
	if(total != 0){

		var pagingHtml = "";

		pagingHtml += "	<!-- paging -->\n";
		pagingHtml += "	<div class=\"paging\">\n";
		
		if (linkStart > pageLinkCount) {
			pagingHtml += "		<a href=\"" + url.replace("{p}", (linkStart - 1) + "") + "\" class=\"btn_prev\">이전</a>\n";
		}
		
		for (var i = linkStart; i <= linkEnd; i++) {
			if (i == currentPageNo) {
				pagingHtml += "		<a class=\"on\" id='pageNo'>" + i + "</a>\n";
			} else {
				pagingHtml += "		<a href=\"" + url.replace("{p}", i + "") + "\">" + i + "</a>\n";
			}
		}
		
		if (linkEnd < pageEnd) {
			pagingHtml += "		<a href=\"" + url.replace("{p}", (linkEnd + 1) + "") + "\" class=\"btn_next\">다음</a>\n";
		}
	
		pagingHtml += "	</div>\n";
		pagingHtml += "	<!-- //paging -->\n";
	
		$("#"+pagingDivId).html(pagingHtml);
		
	}else{
		$("#"+pagingDivId).html("");
	}
}

/*
total : 전체 목록 개수, 
listingCount : 리스트할 Row 개수, 
currentPageNo : 현재 페이지 번호, 
url : a 태그에 들어갈 URL {p} 부분에 페이지 번호가 입력(치환)되어 표시됨
*/
function pagingOnly(total, listingCount, currentPageNo, url) {
	
	var pageLinkCount = 10; // 하단 페이징 버튼 개수
	
	var pageEnd = Math.ceil(total / listingCount);  // 전체에서 마지막 페이지 번호

	if (currentPageNo > pageEnd) {
		currentPageNo = pageEnd;
	}

	var linkStart = Math.floor((currentPageNo - 1) / pageLinkCount) * pageLinkCount + 1;
	var linkEnd = (pageEnd - linkStart >= pageLinkCount) 
						? linkStart + pageLinkCount - 1 : pageEnd;
	
	if (total == 0) {
		linkStart = 0;
	}
	
	//console.log("pageLinkCount", pageLinkCount);
	//console.log("pageEnd", pageEnd);
	//console.log("listingCount", listingCount);
	//console.log("currentPageNo", currentPageNo);
	//console.log("linkStart", linkStart);
	//console.log("linkEnd", linkEnd);
	if(total != 0){
	
		var pagingHtml = "";
		pagingHtml += "	<!-- paging -->\n";
		pagingHtml += "	<div class=\"paging\">\n";
		
		if (linkStart > pageLinkCount) {
			pagingHtml += "		<a href=\"" + url.replace("{p}", (linkStart - 1) + "") + "\" class=\"btn_prev\">이전</a>\n";
		}
		
		for (var i = linkStart; i <= linkEnd; i++) {
			if (i == currentPageNo) {
				pagingHtml += "		<a class=\"on\" id='pageNo'>" + i + "</a>\n";
			} else {
				pagingHtml += "		<a href=\"" + url.replace("{p}", i + "") + "\">" + i + "</a>\n";
			}
		}
		
		if (linkEnd < pageEnd) {
			pagingHtml += "		<a href=\"" + url.replace("{p}", (linkEnd + 1) + "") + "\" class=\"btn_next\">다음</a>\n";
		}
	
		pagingHtml += "	</div>\n";
		pagingHtml += "	<!-- //paging -->\n";
	
		$("div.pagin_wrap").html(pagingHtml);
	
	}else{
		$("div.pagin_wrap").html("");
	}
}

/*
total : 전체 목록 개수, 
listingCount : 리스트할 Row 개수, 
currentPageNo : 현재 페이지 번호, 
url : a 태그에 들어갈 URL {p} 부분에 페이지 번호가 입력(치환)되어 표시됨
*/
function paging2(pagingDivId, total, listingCount, currentPageNo, url, selcompUrl) {
	
	var pageLinkCount = 5; // 하단 페이징 버튼 개수
	
	var pageEnd = Math.ceil(total / listingCount);  // 전체에서 마지막 페이지 번호

	if (currentPageNo > pageEnd) {
		currentPageNo = pageEnd;
	}

	var linkStart = Math.floor((currentPageNo - 1) / pageLinkCount) * pageLinkCount + 1;
	var linkEnd = (pageEnd - linkStart >= pageLinkCount) 
						? linkStart + pageLinkCount - 1 : pageEnd;
	
	//console.log("pageLinkCount", pageLinkCount);
	//console.log("pageEnd", pageEnd);
	//console.log("listingCount", listingCount);
	//console.log("currentPageNo", currentPageNo);
	//console.log("linkStart", linkStart);
	//console.log("linkEnd", linkEnd);
	if(total != 0){
		
		var pagingHtml = "<button type=\"button\" class=\"btn_M btn_cont_search_close\" onclick=\""+ selcompUrl +"\">선택 완료</button>";
		
		pagingHtml += "<br>";
	
		pagingHtml += "	<!-- paging -->\n";
		pagingHtml += "	<div class=\"paging\">\n";
		
		if (linkStart > pageLinkCount) {
			pagingHtml += "		<a href=\"" + url.replace("{p}", (linkStart - 1) + "") + "\" class=\"btn_prev\">이전</a>\n";
		}
		
		for (var i = linkStart; i <= linkEnd; i++) {
			if (i == currentPageNo) {
				pagingHtml += "		<a class=\"on\" id='pageNo'>" + i + "</a>\n";
			} else {
				pagingHtml += "		<a href=\"" + url.replace("{p}", i + "") + "\">" + i + "</a>\n";
			}
		}
		
		if (linkEnd < pageEnd) {
			pagingHtml += "		<a href=\"" + url.replace("{p}", (linkEnd + 1) + "") + "\" class=\"btn_next\">다음</a>\n";
		}
	
		pagingHtml += "	</div>\n";
		pagingHtml += "	<!-- //paging -->\n";
	
		$("#"+pagingDivId).html(pagingHtml);
	
	}else{
		$("#"+pagingDivId).html("");
	}
}



//숫자 타입에서 3자리 단위로 콤마를 넣어준다. 소숫점 지원.
//예) var n = 1000; console.log(n.format());
Number.prototype.format = function() {
	if (this == 0) {
		return 0;
	}
	var reg = /(^[+-]?\d+)(\d{3})/;
	var n = (this + '');
	while (reg.test(n)) {
		n = n.replace(reg, '$1' + ',' + '$2');
	}
	return n;
}

function isNull(value){
	if(value=='' || value==null || value==undefined || value==NaN){
		return "";
	}else{
		return value;
	}
}

function isNullCheck(value){
	if(value=='' || value==null || value==undefined || value==NaN || value=='undefined'){
		return true;
	}else{
		return false;
	}
}

function showLoading(){
	$(".loading").show();
}

function hideLoading(){
	$(".loading").hide();
}

Date.prototype.format = function(f) {
    if (!this.valueOf()) return " ";
 
    var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    var d = this;
     
    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
        switch ($1) {
            case "yyyy": return d.getFullYear();
            case "yy": return (d.getFullYear() % 1000).zf(2);
            case "MM": return (d.getMonth() + 1).zf(2);
            case "dd": return d.getDate().zf(2);
            case "E": return weekName[d.getDay()];
            case "HH": return d.getHours().zf(2);
            case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
            case "mm": return d.getMinutes().zf(2);
            case "ss": return d.getSeconds().zf(2);
            case "a/p": return d.getHours() < 12 ? "오전" : "오후";
            default: return $1;
        }
    });
};
function addDays(date, amount) {
    var tzOff = date.getTimezoneOffset() * 60 * 1000,
        t = date.getTime(),
        d = new Date(),
        tzOff2;

    t += (1000 * 60 * 60 * 24) * amount;
    d.setTime(t);

    tzOff2 = d.getTimezoneOffset() * 60 * 1000;
    if (tzOff != tzOff2) {
      var diff = tzOff2 - tzOff;
      t += diff;
      d.setTime(t);
    }

    return d;
  }
Date.prototype.yyyymmdd = function() {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [this.getFullYear(), 
            '-',
            (mm>9 ? '' : '0') + mm,
            '-',
            (dd>9 ? '' : '0') + dd
           ].join('');
  };
String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};

/* Date.format 사용 예시
2011년 09월 11일 오후 03시 45분 42초
console.log(new Date().format("yyyy년 MM월 dd일 a/p hh시 mm분 ss초"));
2011-09-11
console.log(new Date().format("yyyy-MM-dd"));
'11 09.11
console.log(new Date().format("'yy MM.dd"));
2011-09-11 일요일
console.log(new Date().format("yyyy-MM-dd E"));
현재년도 : 2011
console.log("현재년도 : " + new Date().format("yyyy"));
*/
