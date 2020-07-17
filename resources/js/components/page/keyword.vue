<template>
  <div>
    <main>
      <div class="container">
        <article class="col-md-8 col-xs-12">
          <section>
            <h2 class="keyword-h2">
              <img class="keyword__logo" src="images/search-mark.png" />
              【{{ }}】からはじまるキーワード（{{ }}語)
            </h2>
            <dl>
              <dt>{{ }}</dt>
              <dd class="keyword__description">
                {{ }}
                <p class="text-right">カテゴリー：{{ }}</p>
              </dd>
            </dl>
          </section>
        </article>
        <the-sidebar></the-sidebar>
      </div>
    </main>
  </div>
</template>

<script>
import TheSidebar from "../layout/TheSidebar";

export default {
  components: {
    TheSidebar,
  },
}
</script>