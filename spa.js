console.log("spa.js");
const spa = ($) => {
  const configMap = {
    extended_height: 434,
    extended_title: 'Click to retract',
    retracted_height: 16,
    retracted_title: 'Click to extend',
    template_html: '<div class="spa-slider"><\/div>'
  };

  let $chatSlider;

  const toggleSlider = () => {
    const slider_height = $chatSlider.height();

    if (slider_height === configMap.retracted_height) {
      $chatSlider
        .animate({ height: configMap.extended_height })
        .attr('title', configMap.extended_title);
      return true;
    } else if (slider_height === configMap.extended_height) {
      $chatSlider
        .animate({ height: configMap.retracted_height })
        .attr('title', configMap.retracted_title);
      return true;
    }

    return false;
  }

  const onClickSlider = (event) => {
    toggleSlider();
    return false;
  }

  const initModule = ($container) => {
    $container.html(configMap.template_html);
    $chatSlider = $container.find('.spa-slider');
    $chatSlider
      .attr('title', configMap.retracted_title)
      .click(onClickSlider);
    return true;
  };

  return { initModule: initModule };
};

jQuery(document).ready(
  () => { spa(jQuery).initModule(jQuery('#spa')); }
);
