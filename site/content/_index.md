---
title: Useful shortcodes for your next Hugo project
date: 2017-11-01T18:28:28+02:00
description: This project includes the set of shortcodes, that could be useful to creating content for website implemented with a Hugo as a static site generator.
---

# [Useful shortcodes] Expands
This is a set of the experiments with different implementation for the expand components that can be used like a Hugo shortcode inside a page content.

## The couple of the expands created with pure CSS approach only

#### Shortcode
{{<highlight html>}}{{</*pure-expand title="Title of expand" class="pure-expand-green"*/>}}Content of the expand{{</*/pure-expand*/>}}{{</highlight>}}

#### Some of the demos
<div>
  {{<pure-expand>}}Repellat unde aperiam natus consectetur corporis perferendis eius ex magni inventore enim deleniti architecto facilis nihil{{</pure-expand>}}
  {{%pure-expand title="This expand has custom title and the markdown syntax inside"%}}**Lorem ipsum** dolor sit amet, consectetur adipisicing elit. Maxime quod, tempore ipsam, quidem dolorum et doloremque id aliquam fugiat autem architecto eaque numquam quae facere. Iure laborum iste eum magnam obcaecati facilis reprehenderit, incidunt dicta sit expedita! Repellat unde aperiam natus consectetur corporis perferendis eius ex magni inventore enim deleniti architecto facilis nihil possimus consequatur ea aliquam quod omnis cumque voluptatibus facere libero necessitatibus esse nostrum, beatae. Explicabo eum possimus illo, incidunt dolorem soluta et architecto repellat modi, qui quo aut delectus, ducimus nesciunt velit perspiciatis praesentium. Perspiciatis non quis dolore rem voluptatem adipisci vero, tempore recusandae odit praesentium cum quo, obcaecati voluptas sequi laudantium hic impedit suscipit alias at optio. Impedit unde sunt modi et, labore corporis ea dolor ad eveniet deleniti porro ipsum culpa molestias expedita sequi id, illo dolorum perferendis est ratione assumenda provident quis corrupti dolores nesciunt. Nihil reiciendis vero at laudantium, cupiditate, blanditiis delectus quod optio ipsum ab nemo architecto ipsa sint, totam porro corporis nobis aspernatur non veniam maiores, soluta a nam vel. Non nisi atque, ea quasi error saepe inventore vero id a aspernatur quas, voluptates mollitia qui ipsam soluta omnis nulla, repellendus, pariatur ipsa. Dolore amet incidunt rem itaque ad nulla maxime.{{%/pure-expand%}}
  {{<pure-expand title="Expand was customized by class" class="pure-expand-green">}}Nihil reiciendis vero at laudantium, cupiditate, blanditiis delectus quod optio ipsum ab nemo architecto ipsa sint{{</pure-expand>}}
</div>

## The expands created with help of pure JavaScript and the CSS animation

#### Shortcode
{{<highlight html>}}{{</*expand title="Customized expand" class="expand-green"*/>}}Content of the expand{{</*/expand*/>}}{{</highlight>}}

#### Some of the demos
<div>
  {{<expand>}}Incidunt dolorem soluta et architecto repellat modi, qui quo aut delectus, ducimus nesciunt velit perspiciatis praesentium. Perspiciatis non quis dolore rem voluptatem adipisci vero, tempore recusandae odit praesentium cum quo, obcaecati voluptas sequi laudantium hic impedit suscipit alias at optio. Impedit unde sunt modi et, labore corporis ea dolor ad eveniet deleniti porro ipsum culpa molestias expedita sequi id, illo dolorum perferendis est ratione assumenda provident quis corrupti dolores nesciunt. Nihil reiciendis vero at laudantium, cupiditate, blanditiis delectus quod optio ipsum ab nemo architecto ipsa sint, totam porro corporis nobis aspernatur non veniam maiores, soluta a nam vel.{{</expand>}}
  {{%expand title="Expand with the custom title and markdown syntax"%}}**Obcaecati** voluptas sequi laudantium hic impedit suscipit alias at optio. Impedit unde sunt modi et, labore corporis ea dolor ad eveniet deleniti porro ipsum culpa molestias expedita sequi id, illo dolorum perferendis est ratione assumenda provident quis corrupti dolores nesciunt.{{%/expand%}}
  {{<expand title="Customized expand" class="expand-green">}}Illo dolorum perferendis est ratione assumenda provident quis corrupti dolores nesciunt{{</expand>}}
</div>
