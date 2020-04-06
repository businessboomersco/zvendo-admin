$(document).ready(function () {

  $('.toggle').click(function (e) {
    e.preventDefault();
    var $this = $(this);

    if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);

    } else {
      $this.parent().parent().find('li .inner').removeClass('show');
      $this.parent().parent().find('li .inner').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
      $this.next().removeClass('active');
    }
  });

  $('.navicon').click(function () {
    $('.navicon').not(this).removeClass('active');
    $(this).toggleClass("active");
  });


  $('.act-link li a').click(function () {
    $('.act-link li a').removeClass("active");
    $(this).addClass("active");
  });



  $('.child-lin').click(function () {
    $('.child-lin').not(this).removeClass('active');
    $(this).toggleClass("active");
  });


  $('[data-toggle="tooltip"]').tooltip();


  $(function () {
    // Sidebar toggle behavior
    $('.sidebarCollapse').on('click', function () {
      $('#sidebar, #content').toggleClass('active');
    });
    // Sidebar resize 
    $('.removal').on('click', function () {
      $('#sidebar').toggleClass('active');
    });
  });

  $('.accordion').click(function () {
    $('#sidebar, #content').removeClass('active');
  });

  $('.accordion').click(function () {
    var w = $(window).width();
    if (w < 991) {
      $('#sidebar, #content').addClass('active');
    }
  });

  //End Header Menu SideBar



  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $('.header').addClass("sticky");
    } else {
      if ($(this).scrollTop() < 1) {
        $('.header').removeClass("sticky");
      }
    }
  });

  //End Header Sticky

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $('.contant-inner').addClass("mar-padd");
    } else {
      if ($(this).scrollTop() < 1) {
        $('.contant-inner').removeClass("mar-padd");
      }
    }
  });

  //Start Item Search Icon

  $('.onclick-bot .fas.fa-search').click(function () {
    $(".formsearch").slideDown("");
    $(".onclick-bot .fas.fa-search").hide("fast");
    $(".onclick-bot .fas.fa-times.cancel").show("fast");
  });


  $('.onclick-bot .fas.fa-times.cancel').click(function () {
    $(".formsearch").slideUp();
    $(".onclick-bot .fas.fa-search").show("");
    $(".onclick-bot .fas.fa-times.cancel").hide("");
  });

  //End Item Search Icon

  $('.click_icon').click(function () {
    $(".navlist").slideToggle();
  });

  $('.close_wizard').click(function () {
    $(".navlist").slideToggle("");
  });

  //End Item Close Wizard Icon


  $('.click-filter').click(function () {
    $(".slidedwn-filter").slideToggle();
  });

  //End Item Box Filter


  $(".custom-file-input").on("change", function () {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
  });


  //End Item Uplode File


  $(".vertical").on("click", ".question", function () {
    $(this).toggleClass("active").next().slideToggle();
    $(".answer").not($(this).next()).slideUp(300);
    $(this).siblings().removeClass("active");
  });

  //End Item PopUp Language


  $('.add').click(function () {
    $('.col-sm-4.block:last').before('<div class="col-sm-4 block"> <div class="segment">   <div class="field"><label> Type <em>*</em> </label><i class="fas fa-sort-down" > </i> <select class = "form-control"> <option value="0" selected="selected" > Default </option><option value="1">Home page banner</option > < option value = "2" > Collection page banner </option><option value="3">Collection logo</option > </select></div>  <div class="imgcent"><img class="img_prev" src="images/photo.jpg" alt="" title=""/><label class="file-bro">Choose file <input type="file" onchange="readURL(this);" style="display: none;"/></label></div></div><div class="remove"><span class="fas fa-times"></span></div></div> ');
  });
  $('.optionBox').on('click', '.remove', function () {
    $(this).parent().remove();
  });
  $('.add2').click(function () {
    $('.col-sm-4.block2:last').before('<div class="col-sm-4 block2"> <div class= "segment"><div class="field"><label> Type <em>*</em> </label><i class="fas fa-sort-down"></i><select class="form-control"> <option value="cart_quantity" selected="selected">Cart quantity</option><option value="customer_group">Customer group</option><option value="nth_order">Nth order</option><option value="shipping_country">Shipping country</option><option value="has_taxon">Has at least one from taxons</option><option value="total_of_items_from_taxon">Total price of items from taxon</option><option value="contains_product">Contains product</option><option value="item_total">Item total</option></select></div> <div class= "field" > <label> Count <em>*</em> </label><input type="number" class="form-control" name="" required="required"></div></div> <div class="remove2"><span class="fas fa-times"></span></div></div> ');
  });
  $('.optionBox2').on('click', '.remove2', function () {
    $(this).parent().remove();
  });

  $('.add3').click(function () {
    $('.col-sm-4.block3:last').before('<div class="col-sm-4 block3"> <div class= "segment"><div class="field"><label> Type <em>*</em> </label><i class="fas fa-sort-down"></i>            <select class="form-control"><option value="order_fixed_discount" selected="selected">Order fixed discount</option><option value="unit_fixed_discount">Item fixed discount</option><option value="order_percentage_discount">Order percentage discount</option><option value="unit_percentage_discount">Item percentage discount</option><option value="shipping_percentage_discount">Shipping percentage discount</option></select></div> <div class="field"><label>Amount <em>*</em> </label><div class="labeled"><span class="descr">EGP</span><input type="text" name="" class="form-control" value="" /></div></div><div class="field"><label>App store <em>*</em> </label><div class="labeled"><span class="descr">EGP</span><input type="text" name="" class="form-control" value="" /></div></div></div> <div class="remove3"><span class="fas fa-times"></span></div></div> ');
  });
  $('.optionBox3').on('click', '.remove3', function () {
    $(this).parent().remove();
  });

  $('.add4').click(function () {
    $('.col-sm-4.block4:last').before('<div class="col-sm-12 block4"> <div class="field"> <i class="fas fa-sort-down"></i> <select class="form-control"><option value="color">color</option><option value="size">size</option><option value="Brand">Brand</option></select></div><div class="remove4"><span class="fas fa-times"></span></div></div> ');
  });
  $('.optionBox4').on('click', '.remove4', function () {
    $(this).parent().remove();
  });

  $('.add5').click(function () {
    $('.block5:last').before('<div class="row block5"> <div class="col-sm-6 field"><label> Stock </label>   <input type="text" name="" class="form-control" value=""></div><div class="col-sm-6 field"><label> Warehouse </label> <i class="fas fa-sort-down"></i> <select class="form-control"><option value=""></option><option value="1">Bbn</option><option value="2">Bbn2</option><option value="3">new</option><option value="4">Elthawra</option></select></div><div class="remove5"><span class="fas fa-times"></span></div></div> ');
  });
  $('.optionBox5').on('click', '.remove5', function () {
    $(this).parent().remove();
  });

  $('.add6').click(function () {
    $('.block6:last').before('<div class="row block6"> <div class="col-sm-6 field"><label> Stock </label>   <input type="text" name="" class="form-control" value=""></div><div class="col-sm-6 field"><label> Warehouse </label> <i class="fas fa-sort-down"></i> <select class="form-control"><option value=""></option><option value="1">Bbn</option><option value="2">Bbn2</option><option value="3">new</option><option value="4">Elthawra</option></select></div><div class="remove6"><span class="fas fa-times"></span></div></div> ');
  });
  $('.optionBox6').on('click', '.remove6', function () {
    $(this).parent().remove();
  });

  $('.add7').click(function () {
    $('.col-sm-6.block7:last').before('<div class="col-sm-6 block7"> <div class="segment">   <div class="field"><label> Product Variants  </label><i class="fas fa-sort-down" > </i> <select class = "form-control"> <option value="0" selected="selected" > Default </option><option value="1">Home page banner</option > < option value = "2" > Collection page banner </option><option value="3">Collection logo</option > </select></div>  <div class="imgcent"><img class="img_prev" src="images/photo.jpg" alt="" title=""/><label class="file-bro">Choose file <input type="file" onchange="readURL(this);" style="display: none;"/></label></div></div><div class="remove7"><span class="fas fa-times"></span></div></div> ');
  });
  $('.optionBox7').on('click', '.remove7', function () {
    $(this).parent().remove();
  });


  //End Item Media Add Photos

  $(".btnrating").on('click', (function (e) {

    var previous_value = $("#selected_rating").val();

    var selected_value = $(this).attr("data-attr");
    $("#selected_rating").val(selected_value);

    $(".selected-rating").empty();
    $(".selected-rating").html(selected_value);

    for (i = 1; i <= selected_value; ++i) {
      $("#rating-star-" + i).toggleClass('btn-warning');
      $("#rating-star-" + i).toggleClass('btn-default');
    }

    for (ix = 1; ix <= previous_value; ++ix) {
      $("#rating-star-" + ix).toggleClass('btn-warning');
      $("#rating-star-" + ix).toggleClass('btn-default');
    }
  }));

  //End Item Rating 


  $('.themeslider').slick({
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });

  $('.theme-img').click(function () {
    $('.theme-img').removeClass("active");
    $(this).addClass("active");
  });

  // End Slider Custom Theme

  $(function () {
    $('.colorpicker-component').colorpicker();
  });

  // End Color Input Fild Theme

  $(".limitedNumbChosen").chosen({
    // max_selected_options: 2,
    placeholder_text_multiple: ""
  });
  //Chosen

  $('.click-chec').change(function () {
    if ($(':checked').length) {
      $('.box-hide').slideToggle('slow');
    }
  });
  // use the :checked selector to find any that are checked

  $(".a-minus").on('click', function () {
    $(this).toggleClass("rotate");
    $(this).parent().next(".disbox").slideToggle("slow");
  });

  $(document).on("click", ".revie .red", function () {
    $(this).parents(".revie").remove();
  });



  $(function () {
    //ritch text
    var options = {
      // text formatting
      bold: true,
      italic: true,
      underline: true,

      // text alignment
      leftAlign: true,
      centerAlign: true,
      rightAlign: true,
      justify: true,

      // lists
      ol: true,
      ul: true,

      // title
      heading: true,

      // fonts
      fonts: true,
      fontList: [
        "Arial",
        "Arial Black",
        "Comic Sans MS",
        "Courier New",
        "Geneva",
        "Georgia",
        "Helvetica",
        "Impact",
        "Lucida Console",
        "Tahoma",
        "Times New Roman",
        "Verdana"
      ],
      fontColor: true,
      fontSize: true,

      // uploads
      imageUpload: true,
      fileUpload: true,

      // media
      videoEmbed: true,

      // link
      urls: true,

      // tables
      table: true,

      // code
      removeStyles: true,
      code: true,

      // colors
      colors: [],

      // dropdowns
      fileHTML: "",
      imageHTML: "",

      // translations
      translations: {
        title: "Title",
        white: "White",
        black: "Black",
        brown: "Brown",
        beige: "Beige",
        darkBlue: "Dark Blue",
        blue: "Blue",
        lightBlue: "Light Blue",
        darkRed: "Dark Red",
        red: "Red",
        darkGreen: "Dark Green",
        green: "Green",
        purple: "Purple",
        darkTurquois: "Dark Turquois",
        turquois: "Turquois",
        darkOrange: "Dark Orange",
        orange: "Orange",
        yellow: "Yellow",
        imageURL: "Image URL",
        fileURL: "File URL",
        linkText: "Link text",
        url: "URL",
        size: "Size",
        responsive: "Responsive",
        text: "Text",
        openIn: "Open in",
        sameTab: "Same tab",
        newTab: "New tab",
        align: "Align",
        left: "Left",
        center: "Center",
        right: "Right",
        rows: "Rows",
        columns: "Columns",
        add: "Add",
        pleaseEnterURL: "Please enter an URL",
        videoURLnotSupported: "Video URL not supported",
        pleaseSelectImage: "Please select an image",
        pleaseSelectFile: "Please select a file",
        bold: "Bold",
        italic: "Italic",
        underline: "Underline",
        alignLeft: "Align left",
        alignCenter: "Align centered",
        alignRight: "Align right",
        addOrderedList: "Add ordered list",
        addUnorderedList: "Add unordered list",
        addHeading: "Add Heading/title",
        addFont: "Add font",
        addFontColor: "Add font color",
        addFontSize: "Add font size",
        addImage: "Add image",
        addVideo: "Add video",
        addFile: "Add file",
        addURL: "Add URL",
        addTable: "Add table",
        removeStyles: "Remove styles",
        code: "Show HTML code",
        undo: "Undo",
        redo: "Redo",
        close: "Close"
      },

      // privacy
      youtubeCookies: false,

      // developer settings
      useSingleQuotes: false,
      height: 0,
      heightPercentage: 0,
      id: "",
      class: "",
      useParagraph: false,
      maxlength: 0
    };
    $('.text-editor').richText(options);
    $('.text-editor2').richText(options);
  });
  //ritch text Editor

  function readURL() {
    var $input = $(this);
    var $newinput = $(this).parent().parent().parent().find('.portimg ');
    if (this.files && this.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        reset($newinput.next('.delbtn'), true);
        $newinput.attr('src', e.target.result).show();
        $newinput.after('<i class="delbtn fas fa-times removebtn"></i>');
      }
      reader.readAsDataURL(this.files[0]);
    }
  }
  $(".fileUpload").change(readURL);
  $("form").on('click', '.delbtn', function (e) {
    reset($(this));
  });

  function reset(elm, prserveFileName) {
    if (elm && elm.length > 0) {
      var $input = elm;
      $input.prev('.portimg').attr('src', '').hide();
      if (!prserveFileName) {
        $($input).parent().parent().parent().find('input.fileUpload ').val("");
        //input.fileUpload and input#uploadre both need to empty values for particular div
      }
      elm.remove();
    }
  }

  // End loop of file input elements



  $("#selectAll").click(function () {
    $(".checkbox").prop("checked", $(this).prop("checked"));
  });

  $(".checkbox").click(function () {
    if (!$(this).prop("checked")) {
      $("#selectAll").prop("checked", false);
    }
  });

  $("#selectAll2").click(function () {
    $(".checkbox2").prop("checked", $(this).prop("checked"));
  });

  $(".checkbox2").click(function () {
    if (!$(this).prop("checked")) {
      $("#selectAll2").prop("checked", false);
    }
  });

  $("#selectAll3").click(function () {
    $(".checkbox3").prop("checked", $(this).prop("checked"));
  });

  $(".checkbox3").click(function () {
    if (!$(this).prop("checked")) {
      $("#selectAll3").prop("checked", false);
    }
  });

  // Check or Uncheck All checkboxes



});




//var blank="http://upload.wikimedia.org/wikipedia/commons/c/c0/Blank.gif";
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('.img_prev')
        .attr('src', e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    var img = input.value;
    $('.img_prev').attr('src', img);
  }
}