




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>bower-angular-mocks/angular-mocks.js at master · angular/bower-angular-mocks · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="angular/bower-angular-mocks" name="twitter:title" /><meta content="bower-angular-mocks - angular-mocks.js bower repo" name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/139426?v=2&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/139426?v=2&amp;s=400" property="og:image" /><meta content="angular/bower-angular-mocks" property="og:title" /><meta content="https://github.com/angular/bower-angular-mocks" property="og:url" /><meta content="bower-angular-mocks - angular-mocks.js bower repo" property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="C64A3091:1E4E:312928:53E03429" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="Esb51BCjdjU2hqAk+XdSnxYcMGWmMkEXutbeGLPo6f2Zt5tBtnUt38+V/+6eZf6T+P5LWdZLR+6FpjgFqBiyYQ==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-2519145fd7dfb6249670563a203ebbc5111db906.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-37be74a84d8377d6b23228a35e9491f5b7f3b460.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="2a8b47455b019ca55fc59ef33b608a69">

      
  <meta name="description" content="bower-angular-mocks - angular-mocks.js bower repo">


  <meta content="139426" name="octolytics-dimension-user_id" /><meta content="angular" name="octolytics-dimension-user_login" /><meta content="8195265" name="octolytics-dimension-repository_id" /><meta content="angular/bower-angular-mocks" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="8195265" name="octolytics-dimension-repository_network_root_id" /><meta content="angular/bower-angular-mocks" name="octolytics-dimension-repository_network_root_nwo" />

  <link href="https://github.com/angular/bower-angular-mocks/commits/master.atom" rel="alternate" title="Recent Commits to bower-angular-mocks:master" type="application/atom+xml">

  </head>


  <body class="logged_out  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fangular%2Fbower-angular-mocks%2Fblob%2Fmaster%2Fangular-mocks.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
          <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
    data-repo="angular/bower-angular-mocks"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="angular/bower-angular-mocks">

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked">
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global">
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">


  <li>
      <a href="/login?return_to=%2Fangular%2Fbower-angular-mocks"
    class="minibutton with-count star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/angular/bower-angular-mocks/stargazers">
      19
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fangular%2Fbower-angular-mocks"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>
      <a href="/angular/bower-angular-mocks/network" class="social-count">
        59
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/angular" class="url fn" itemprop="url" rel="author"><span itemprop="title">angular</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/angular/bower-angular-mocks" class="js-current-repository js-repo-home-link">bower-angular-mocks</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders" data-issue-count-url="/angular/bower-angular-mocks/issues/counts">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/angular/bower-angular-mocks" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /angular/bower-angular-mocks">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/angular/bower-angular-mocks/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /angular/bower-angular-mocks/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class="js-pull-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/angular/bower-angular-mocks/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /angular/bower-angular-mocks/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/angular/bower-angular-mocks/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /angular/bower-angular-mocks/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/angular/bower-angular-mocks.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/angular/bower-angular-mocks.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/angular/bower-angular-mocks" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/angular/bower-angular-mocks" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button" title="Save angular/bower-angular-mocks to your computer and use it in GitHub Desktop." aria-label="Save angular/bower-angular-mocks to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/angular/bower-angular-mocks/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download angular/bower-angular-mocks as a zip file"
                   title="Download angular/bower-angular-mocks as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/angular/bower-angular-mocks/blob/fa940be728433a78ac716d60bb72720fe191b662/angular-mocks.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:56ba87e57a80d483f4bcd5287bd53fb8 -->

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/blob/master/angular-mocks.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/blob/unstable/angular-mocks.js"
                 data-name="unstable"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="unstable">unstable</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.3023+sha.7085b2b/angular-mocks.js"
                 data-name="v1.3.0-build.3023+sha.7085b2b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.3023+sha.7085b2b">v1.3.0-build.3023+sha.7085b2b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.3022+sha.acf38b3/angular-mocks.js"
                 data-name="v1.3.0-build.3022+sha.acf38b3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.3022+sha.acf38b3">v1.3.0-build.3022+sha.acf38b3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.3021+sha.9475328/angular-mocks.js"
                 data-name="v1.3.0-build.3021+sha.9475328"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.3021+sha.9475328">v1.3.0-build.3021+sha.9475328</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.3020+sha.91d5640/angular-mocks.js"
                 data-name="v1.3.0-build.3020+sha.91d5640"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.3020+sha.91d5640">v1.3.0-build.3020+sha.91d5640</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.3019+sha.fc73256/angular-mocks.js"
                 data-name="v1.3.0-build.3019+sha.fc73256"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.3019+sha.fc73256">v1.3.0-build.3019+sha.fc73256</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.3018+sha.23bc92b/angular-mocks.js"
                 data-name="v1.3.0-build.3018+sha.23bc92b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.3018+sha.23bc92b">v1.3.0-build.3018+sha.23bc92b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.3017+sha.48b34dd/angular-mocks.js"
                 data-name="v1.3.0-build.3017+sha.48b34dd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.3017+sha.48b34dd">v1.3.0-build.3017+sha.48b34dd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.3016+sha.25a476e/angular-mocks.js"
                 data-name="v1.3.0-build.3016+sha.25a476e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.3016+sha.25a476e">v1.3.0-build.3016+sha.25a476e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.3015+sha.dd2a803/angular-mocks.js"
                 data-name="v1.3.0-build.3015+sha.dd2a803"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.3015+sha.dd2a803">v1.3.0-build.3015+sha.dd2a803</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.3014+sha.7884c25/angular-mocks.js"
                 data-name="v1.3.0-build.3014+sha.7884c25"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.3014+sha.7884c25">v1.3.0-build.3014+sha.7884c25</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.3013+sha.c024f28/angular-mocks.js"
                 data-name="v1.3.0-build.3013+sha.c024f28"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.3013+sha.c024f28">v1.3.0-build.3013+sha.c024f28</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.3012+sha.108a69b/angular-mocks.js"
                 data-name="v1.3.0-build.3012+sha.108a69b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.3012+sha.108a69b">v1.3.0-build.3012+sha.108a69b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.3011+sha.52b77b6/angular-mocks.js"
                 data-name="v1.3.0-build.3011+sha.52b77b6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.3011+sha.52b77b6">v1.3.0-build.3011+sha.52b77b6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.3010+sha.e982581/angular-mocks.js"
                 data-name="v1.3.0-build.3010+sha.e982581"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.3010+sha.e982581">v1.3.0-build.3010+sha.e982581</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.3009+sha.0107bfc/angular-mocks.js"
                 data-name="v1.3.0-build.3009+sha.0107bfc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.3009+sha.0107bfc">v1.3.0-build.3009+sha.0107bfc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.3008+sha.9e7cb3c/angular-mocks.js"
                 data-name="v1.3.0-build.3008+sha.9e7cb3c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.3008+sha.9e7cb3c">v1.3.0-build.3008+sha.9e7cb3c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.3007+sha.38db2d4/angular-mocks.js"
                 data-name="v1.3.0-build.3007+sha.38db2d4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.3007+sha.38db2d4">v1.3.0-build.3007+sha.38db2d4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.3006+sha.41cb588/angular-mocks.js"
                 data-name="v1.3.0-build.3006+sha.41cb588"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.3006+sha.41cb588">v1.3.0-build.3006+sha.41cb588</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.3005+sha.1571950/angular-mocks.js"
                 data-name="v1.3.0-build.3005+sha.1571950"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.3005+sha.1571950">v1.3.0-build.3005+sha.1571950</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.3004+sha.9836a2d/angular-mocks.js"
                 data-name="v1.3.0-build.3004+sha.9836a2d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.3004+sha.9836a2d">v1.3.0-build.3004+sha.9836a2d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.3003+sha.97f230a/angular-mocks.js"
                 data-name="v1.3.0-build.3003+sha.97f230a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.3003+sha.97f230a">v1.3.0-build.3003+sha.97f230a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.3002+sha.9a2f8e1/angular-mocks.js"
                 data-name="v1.3.0-build.3002+sha.9a2f8e1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.3002+sha.9a2f8e1">v1.3.0-build.3002+sha.9a2f8e1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.3001+sha.d2f8f25/angular-mocks.js"
                 data-name="v1.3.0-build.3001+sha.d2f8f25"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.3001+sha.d2f8f25">v1.3.0-build.3001+sha.d2f8f25</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.3000+sha.e329243/angular-mocks.js"
                 data-name="v1.3.0-build.3000+sha.e329243"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.3000+sha.e329243">v1.3.0-build.3000+sha.e329243</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2999+sha.cdc7db3/angular-mocks.js"
                 data-name="v1.3.0-build.2999+sha.cdc7db3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2999+sha.cdc7db3">v1.3.0-build.2999+sha.cdc7db3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2998+sha.a00c9bc/angular-mocks.js"
                 data-name="v1.3.0-build.2998+sha.a00c9bc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2998+sha.a00c9bc">v1.3.0-build.2998+sha.a00c9bc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2997+sha.34781f1/angular-mocks.js"
                 data-name="v1.3.0-build.2997+sha.34781f1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2997+sha.34781f1">v1.3.0-build.2997+sha.34781f1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2996+sha.3625803/angular-mocks.js"
                 data-name="v1.3.0-build.2996+sha.3625803"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2996+sha.3625803">v1.3.0-build.2996+sha.3625803</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2995+sha.ca0f59e/angular-mocks.js"
                 data-name="v1.3.0-build.2995+sha.ca0f59e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2995+sha.ca0f59e">v1.3.0-build.2995+sha.ca0f59e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2994+sha.38678cb/angular-mocks.js"
                 data-name="v1.3.0-build.2994+sha.38678cb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2994+sha.38678cb">v1.3.0-build.2994+sha.38678cb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2993+sha.e5c6b70/angular-mocks.js"
                 data-name="v1.3.0-build.2993+sha.e5c6b70"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2993+sha.e5c6b70">v1.3.0-build.2993+sha.e5c6b70</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2992+sha.3607c98/angular-mocks.js"
                 data-name="v1.3.0-build.2992+sha.3607c98"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2992+sha.3607c98">v1.3.0-build.2992+sha.3607c98</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2991+sha.9025113/angular-mocks.js"
                 data-name="v1.3.0-build.2991+sha.9025113"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2991+sha.9025113">v1.3.0-build.2991+sha.9025113</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2990+sha.c03ad24/angular-mocks.js"
                 data-name="v1.3.0-build.2990+sha.c03ad24"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2990+sha.c03ad24">v1.3.0-build.2990+sha.c03ad24</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2989+sha.ccc3255/angular-mocks.js"
                 data-name="v1.3.0-build.2989+sha.ccc3255"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2989+sha.ccc3255">v1.3.0-build.2989+sha.ccc3255</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2988+sha.583f37d/angular-mocks.js"
                 data-name="v1.3.0-build.2988+sha.583f37d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2988+sha.583f37d">v1.3.0-build.2988+sha.583f37d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2987+sha.2e0a4e3/angular-mocks.js"
                 data-name="v1.3.0-build.2987+sha.2e0a4e3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2987+sha.2e0a4e3">v1.3.0-build.2987+sha.2e0a4e3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2986+sha.1f533ad/angular-mocks.js"
                 data-name="v1.3.0-build.2986+sha.1f533ad"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2986+sha.1f533ad">v1.3.0-build.2986+sha.1f533ad</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2985+sha.46f755a/angular-mocks.js"
                 data-name="v1.3.0-build.2985+sha.46f755a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2985+sha.46f755a">v1.3.0-build.2985+sha.46f755a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2984+sha.0daaab0/angular-mocks.js"
                 data-name="v1.3.0-build.2984+sha.0daaab0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2984+sha.0daaab0">v1.3.0-build.2984+sha.0daaab0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2982+sha.86340a5/angular-mocks.js"
                 data-name="v1.3.0-build.2982+sha.86340a5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2982+sha.86340a5">v1.3.0-build.2982+sha.86340a5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2981+sha.c03b9e5/angular-mocks.js"
                 data-name="v1.3.0-build.2981+sha.c03b9e5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2981+sha.c03b9e5">v1.3.0-build.2981+sha.c03b9e5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2980+sha.683d722/angular-mocks.js"
                 data-name="v1.3.0-build.2980+sha.683d722"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2980+sha.683d722">v1.3.0-build.2980+sha.683d722</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2979+sha.fefb7ed/angular-mocks.js"
                 data-name="v1.3.0-build.2979+sha.fefb7ed"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2979+sha.fefb7ed">v1.3.0-build.2979+sha.fefb7ed</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2978+sha.37117ab/angular-mocks.js"
                 data-name="v1.3.0-build.2978+sha.37117ab"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2978+sha.37117ab">v1.3.0-build.2978+sha.37117ab</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2977+sha.11f5aee/angular-mocks.js"
                 data-name="v1.3.0-build.2977+sha.11f5aee"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2977+sha.11f5aee">v1.3.0-build.2977+sha.11f5aee</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2976+sha.925b208/angular-mocks.js"
                 data-name="v1.3.0-build.2976+sha.925b208"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2976+sha.925b208">v1.3.0-build.2976+sha.925b208</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2975+sha.8a27aba/angular-mocks.js"
                 data-name="v1.3.0-build.2975+sha.8a27aba"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2975+sha.8a27aba">v1.3.0-build.2975+sha.8a27aba</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2974+sha.f3a763f/angular-mocks.js"
                 data-name="v1.3.0-build.2974+sha.f3a763f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2974+sha.f3a763f">v1.3.0-build.2974+sha.f3a763f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2971+sha.99a2f0a/angular-mocks.js"
                 data-name="v1.3.0-build.2971+sha.99a2f0a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2971+sha.99a2f0a">v1.3.0-build.2971+sha.99a2f0a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2970+sha.469ea33/angular-mocks.js"
                 data-name="v1.3.0-build.2970+sha.469ea33"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2970+sha.469ea33">v1.3.0-build.2970+sha.469ea33</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2969+sha.92a10d8/angular-mocks.js"
                 data-name="v1.3.0-build.2969+sha.92a10d8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2969+sha.92a10d8">v1.3.0-build.2969+sha.92a10d8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2968+sha.dfd2284/angular-mocks.js"
                 data-name="v1.3.0-build.2968+sha.dfd2284"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2968+sha.dfd2284">v1.3.0-build.2968+sha.dfd2284</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2967+sha.dfd2284/angular-mocks.js"
                 data-name="v1.3.0-build.2967+sha.dfd2284"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2967+sha.dfd2284">v1.3.0-build.2967+sha.dfd2284</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2966+sha.3b158aa/angular-mocks.js"
                 data-name="v1.3.0-build.2966+sha.3b158aa"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2966+sha.3b158aa">v1.3.0-build.2966+sha.3b158aa</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2965+sha.3b158aa/angular-mocks.js"
                 data-name="v1.3.0-build.2965+sha.3b158aa"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2965+sha.3b158aa">v1.3.0-build.2965+sha.3b158aa</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2964+sha.f309c4c/angular-mocks.js"
                 data-name="v1.3.0-build.2964+sha.f309c4c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2964+sha.f309c4c">v1.3.0-build.2964+sha.f309c4c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2963+sha.0209b2e/angular-mocks.js"
                 data-name="v1.3.0-build.2963+sha.0209b2e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2963+sha.0209b2e">v1.3.0-build.2963+sha.0209b2e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2962+sha.2ad1b4c/angular-mocks.js"
                 data-name="v1.3.0-build.2962+sha.2ad1b4c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2962+sha.2ad1b4c">v1.3.0-build.2962+sha.2ad1b4c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2961+sha.2ad1b4c/angular-mocks.js"
                 data-name="v1.3.0-build.2961+sha.2ad1b4c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2961+sha.2ad1b4c">v1.3.0-build.2961+sha.2ad1b4c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2959+sha.aa7dbf0/angular-mocks.js"
                 data-name="v1.3.0-build.2959+sha.aa7dbf0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2959+sha.aa7dbf0">v1.3.0-build.2959+sha.aa7dbf0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2958+sha.bd2fb3d/angular-mocks.js"
                 data-name="v1.3.0-build.2958+sha.bd2fb3d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2958+sha.bd2fb3d">v1.3.0-build.2958+sha.bd2fb3d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2957+sha.20f4f63/angular-mocks.js"
                 data-name="v1.3.0-build.2957+sha.20f4f63"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2957+sha.20f4f63">v1.3.0-build.2957+sha.20f4f63</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2954+sha.3f4ee15/angular-mocks.js"
                 data-name="v1.3.0-build.2954+sha.3f4ee15"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2954+sha.3f4ee15">v1.3.0-build.2954+sha.3f4ee15</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2953+sha.c20d438/angular-mocks.js"
                 data-name="v1.3.0-build.2953+sha.c20d438"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2953+sha.c20d438">v1.3.0-build.2953+sha.c20d438</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2952+sha.81d9193/angular-mocks.js"
                 data-name="v1.3.0-build.2952+sha.81d9193"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2952+sha.81d9193">v1.3.0-build.2952+sha.81d9193</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2951+sha.3ba9818/angular-mocks.js"
                 data-name="v1.3.0-build.2951+sha.3ba9818"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2951+sha.3ba9818">v1.3.0-build.2951+sha.3ba9818</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2950+sha.e4ba894/angular-mocks.js"
                 data-name="v1.3.0-build.2950+sha.e4ba894"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2950+sha.e4ba894">v1.3.0-build.2950+sha.e4ba894</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2949+sha.d181726/angular-mocks.js"
                 data-name="v1.3.0-build.2949+sha.d181726"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2949+sha.d181726">v1.3.0-build.2949+sha.d181726</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2947+sha.eb2bab4/angular-mocks.js"
                 data-name="v1.3.0-build.2947+sha.eb2bab4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2947+sha.eb2bab4">v1.3.0-build.2947+sha.eb2bab4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2946+sha.2474173/angular-mocks.js"
                 data-name="v1.3.0-build.2946+sha.2474173"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2946+sha.2474173">v1.3.0-build.2946+sha.2474173</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2945+sha.8cefb0b/angular-mocks.js"
                 data-name="v1.3.0-build.2945+sha.8cefb0b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2945+sha.8cefb0b">v1.3.0-build.2945+sha.8cefb0b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2944+sha.d7b3aa9/angular-mocks.js"
                 data-name="v1.3.0-build.2944+sha.d7b3aa9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2944+sha.d7b3aa9">v1.3.0-build.2944+sha.d7b3aa9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2943+sha.3c7f0f7/angular-mocks.js"
                 data-name="v1.3.0-build.2943+sha.3c7f0f7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2943+sha.3c7f0f7">v1.3.0-build.2943+sha.3c7f0f7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2942+sha.d259754/angular-mocks.js"
                 data-name="v1.3.0-build.2942+sha.d259754"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2942+sha.d259754">v1.3.0-build.2942+sha.d259754</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2941+sha.1c9ab40/angular-mocks.js"
                 data-name="v1.3.0-build.2941+sha.1c9ab40"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2941+sha.1c9ab40">v1.3.0-build.2941+sha.1c9ab40</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2940+sha.d6876f2/angular-mocks.js"
                 data-name="v1.3.0-build.2940+sha.d6876f2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2940+sha.d6876f2">v1.3.0-build.2940+sha.d6876f2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2939+sha.1f23980/angular-mocks.js"
                 data-name="v1.3.0-build.2939+sha.1f23980"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2939+sha.1f23980">v1.3.0-build.2939+sha.1f23980</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2938+sha.d2f348b/angular-mocks.js"
                 data-name="v1.3.0-build.2938+sha.d2f348b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2938+sha.d2f348b">v1.3.0-build.2938+sha.d2f348b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2937+sha.4adc44a/angular-mocks.js"
                 data-name="v1.3.0-build.2937+sha.4adc44a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2937+sha.4adc44a">v1.3.0-build.2937+sha.4adc44a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2936+sha.4adc44a/angular-mocks.js"
                 data-name="v1.3.0-build.2936+sha.4adc44a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2936+sha.4adc44a">v1.3.0-build.2936+sha.4adc44a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2935+sha.e8066c4/angular-mocks.js"
                 data-name="v1.3.0-build.2935+sha.e8066c4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2935+sha.e8066c4">v1.3.0-build.2935+sha.e8066c4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2934+sha.048a5f1/angular-mocks.js"
                 data-name="v1.3.0-build.2934+sha.048a5f1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2934+sha.048a5f1">v1.3.0-build.2934+sha.048a5f1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2933+sha.8881606/angular-mocks.js"
                 data-name="v1.3.0-build.2933+sha.8881606"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2933+sha.8881606">v1.3.0-build.2933+sha.8881606</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2932+sha.7e6e0d6/angular-mocks.js"
                 data-name="v1.3.0-build.2932+sha.7e6e0d6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2932+sha.7e6e0d6">v1.3.0-build.2932+sha.7e6e0d6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2931+sha.86d55c1/angular-mocks.js"
                 data-name="v1.3.0-build.2931+sha.86d55c1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2931+sha.86d55c1">v1.3.0-build.2931+sha.86d55c1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2930+sha.840e889/angular-mocks.js"
                 data-name="v1.3.0-build.2930+sha.840e889"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2930+sha.840e889">v1.3.0-build.2930+sha.840e889</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2929+sha.db9f257/angular-mocks.js"
                 data-name="v1.3.0-build.2929+sha.db9f257"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2929+sha.db9f257">v1.3.0-build.2929+sha.db9f257</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2928+sha.4f45bf1/angular-mocks.js"
                 data-name="v1.3.0-build.2928+sha.4f45bf1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2928+sha.4f45bf1">v1.3.0-build.2928+sha.4f45bf1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2927+sha.92bceb5/angular-mocks.js"
                 data-name="v1.3.0-build.2927+sha.92bceb5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2927+sha.92bceb5">v1.3.0-build.2927+sha.92bceb5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2926+sha.528f56a/angular-mocks.js"
                 data-name="v1.3.0-build.2926+sha.528f56a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2926+sha.528f56a">v1.3.0-build.2926+sha.528f56a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2925+sha.345ed5d/angular-mocks.js"
                 data-name="v1.3.0-build.2925+sha.345ed5d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2925+sha.345ed5d">v1.3.0-build.2925+sha.345ed5d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2924+sha.1453fb7/angular-mocks.js"
                 data-name="v1.3.0-build.2924+sha.1453fb7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2924+sha.1453fb7">v1.3.0-build.2924+sha.1453fb7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2923+sha.6f77610/angular-mocks.js"
                 data-name="v1.3.0-build.2923+sha.6f77610"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2923+sha.6f77610">v1.3.0-build.2923+sha.6f77610</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2922+sha.0113f22/angular-mocks.js"
                 data-name="v1.3.0-build.2922+sha.0113f22"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2922+sha.0113f22">v1.3.0-build.2922+sha.0113f22</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2921+sha.02c0ed2/angular-mocks.js"
                 data-name="v1.3.0-build.2921+sha.02c0ed2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2921+sha.02c0ed2">v1.3.0-build.2921+sha.02c0ed2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2920+sha.3dafcba/angular-mocks.js"
                 data-name="v1.3.0-build.2920+sha.3dafcba"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2920+sha.3dafcba">v1.3.0-build.2920+sha.3dafcba</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2919+sha.071cbdb/angular-mocks.js"
                 data-name="v1.3.0-build.2919+sha.071cbdb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2919+sha.071cbdb">v1.3.0-build.2919+sha.071cbdb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2918+sha.a2c7cf9/angular-mocks.js"
                 data-name="v1.3.0-build.2918+sha.a2c7cf9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2918+sha.a2c7cf9">v1.3.0-build.2918+sha.a2c7cf9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2917+sha.af20a8a/angular-mocks.js"
                 data-name="v1.3.0-build.2917+sha.af20a8a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2917+sha.af20a8a">v1.3.0-build.2917+sha.af20a8a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2916+sha.d15cea4/angular-mocks.js"
                 data-name="v1.3.0-build.2916+sha.d15cea4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2916+sha.d15cea4">v1.3.0-build.2916+sha.d15cea4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2915+sha.363fb4f/angular-mocks.js"
                 data-name="v1.3.0-build.2915+sha.363fb4f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2915+sha.363fb4f">v1.3.0-build.2915+sha.363fb4f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2914+sha.5f6b378/angular-mocks.js"
                 data-name="v1.3.0-build.2914+sha.5f6b378"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2914+sha.5f6b378">v1.3.0-build.2914+sha.5f6b378</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2913+sha.20b0c24/angular-mocks.js"
                 data-name="v1.3.0-build.2913+sha.20b0c24"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2913+sha.20b0c24">v1.3.0-build.2913+sha.20b0c24</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2911+sha.c61626f/angular-mocks.js"
                 data-name="v1.3.0-build.2911+sha.c61626f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2911+sha.c61626f">v1.3.0-build.2911+sha.c61626f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2910+sha.38bdb40/angular-mocks.js"
                 data-name="v1.3.0-build.2910+sha.38bdb40"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2910+sha.38bdb40">v1.3.0-build.2910+sha.38bdb40</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2909+sha.2e84cf9/angular-mocks.js"
                 data-name="v1.3.0-build.2909+sha.2e84cf9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2909+sha.2e84cf9">v1.3.0-build.2909+sha.2e84cf9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2908+sha.c4c8fbd/angular-mocks.js"
                 data-name="v1.3.0-build.2908+sha.c4c8fbd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2908+sha.c4c8fbd">v1.3.0-build.2908+sha.c4c8fbd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2907+sha.9630d71/angular-mocks.js"
                 data-name="v1.3.0-build.2907+sha.9630d71"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2907+sha.9630d71">v1.3.0-build.2907+sha.9630d71</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2906+sha.cf4f85f/angular-mocks.js"
                 data-name="v1.3.0-build.2906+sha.cf4f85f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2906+sha.cf4f85f">v1.3.0-build.2906+sha.cf4f85f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2905+sha.93510eb/angular-mocks.js"
                 data-name="v1.3.0-build.2905+sha.93510eb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2905+sha.93510eb">v1.3.0-build.2905+sha.93510eb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2904+sha.93510eb/angular-mocks.js"
                 data-name="v1.3.0-build.2904+sha.93510eb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2904+sha.93510eb">v1.3.0-build.2904+sha.93510eb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2903+sha.88a3257/angular-mocks.js"
                 data-name="v1.3.0-build.2903+sha.88a3257"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2903+sha.88a3257">v1.3.0-build.2903+sha.88a3257</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2902+sha.b8ae73e/angular-mocks.js"
                 data-name="v1.3.0-build.2902+sha.b8ae73e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2902+sha.b8ae73e">v1.3.0-build.2902+sha.b8ae73e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2901+sha.36831ec/angular-mocks.js"
                 data-name="v1.3.0-build.2901+sha.36831ec"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2901+sha.36831ec">v1.3.0-build.2901+sha.36831ec</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2900+sha.14e3ba8/angular-mocks.js"
                 data-name="v1.3.0-build.2900+sha.14e3ba8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2900+sha.14e3ba8">v1.3.0-build.2900+sha.14e3ba8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2899+sha.a296097/angular-mocks.js"
                 data-name="v1.3.0-build.2899+sha.a296097"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2899+sha.a296097">v1.3.0-build.2899+sha.a296097</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2898+sha.36831ec/angular-mocks.js"
                 data-name="v1.3.0-build.2898+sha.36831ec"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2898+sha.36831ec">v1.3.0-build.2898+sha.36831ec</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2897+sha.8bc2667/angular-mocks.js"
                 data-name="v1.3.0-build.2897+sha.8bc2667"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2897+sha.8bc2667">v1.3.0-build.2897+sha.8bc2667</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2896+sha.14e3ba8/angular-mocks.js"
                 data-name="v1.3.0-build.2896+sha.14e3ba8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2896+sha.14e3ba8">v1.3.0-build.2896+sha.14e3ba8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2895+sha.36831ec/angular-mocks.js"
                 data-name="v1.3.0-build.2895+sha.36831ec"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2895+sha.36831ec">v1.3.0-build.2895+sha.36831ec</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2894+sha.36831ec/angular-mocks.js"
                 data-name="v1.3.0-build.2894+sha.36831ec"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2894+sha.36831ec">v1.3.0-build.2894+sha.36831ec</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2893+sha.5963b5c/angular-mocks.js"
                 data-name="v1.3.0-build.2893+sha.5963b5c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2893+sha.5963b5c">v1.3.0-build.2893+sha.5963b5c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2892+sha.621f678/angular-mocks.js"
                 data-name="v1.3.0-build.2892+sha.621f678"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2892+sha.621f678">v1.3.0-build.2892+sha.621f678</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2891+sha.b9fcf01/angular-mocks.js"
                 data-name="v1.3.0-build.2891+sha.b9fcf01"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2891+sha.b9fcf01">v1.3.0-build.2891+sha.b9fcf01</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2890+sha.3f2232b/angular-mocks.js"
                 data-name="v1.3.0-build.2890+sha.3f2232b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2890+sha.3f2232b">v1.3.0-build.2890+sha.3f2232b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2889+sha.a88c215/angular-mocks.js"
                 data-name="v1.3.0-build.2889+sha.a88c215"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2889+sha.a88c215">v1.3.0-build.2889+sha.a88c215</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2888+sha.9b3961c/angular-mocks.js"
                 data-name="v1.3.0-build.2888+sha.9b3961c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2888+sha.9b3961c">v1.3.0-build.2888+sha.9b3961c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2887+sha.9b3961c/angular-mocks.js"
                 data-name="v1.3.0-build.2887+sha.9b3961c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2887+sha.9b3961c">v1.3.0-build.2887+sha.9b3961c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2886+sha.af6f943/angular-mocks.js"
                 data-name="v1.3.0-build.2886+sha.af6f943"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2886+sha.af6f943">v1.3.0-build.2886+sha.af6f943</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2885+sha.e24fb17/angular-mocks.js"
                 data-name="v1.3.0-build.2885+sha.e24fb17"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2885+sha.e24fb17">v1.3.0-build.2885+sha.e24fb17</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2884+sha.0a51a05/angular-mocks.js"
                 data-name="v1.3.0-build.2884+sha.0a51a05"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2884+sha.0a51a05">v1.3.0-build.2884+sha.0a51a05</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2883+sha.cb42766/angular-mocks.js"
                 data-name="v1.3.0-build.2883+sha.cb42766"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2883+sha.cb42766">v1.3.0-build.2883+sha.cb42766</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2882+sha.0958489/angular-mocks.js"
                 data-name="v1.3.0-build.2882+sha.0958489"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2882+sha.0958489">v1.3.0-build.2882+sha.0958489</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2881+sha.920c369/angular-mocks.js"
                 data-name="v1.3.0-build.2881+sha.920c369"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2881+sha.920c369">v1.3.0-build.2881+sha.920c369</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2880+sha.1a9cb0a/angular-mocks.js"
                 data-name="v1.3.0-build.2880+sha.1a9cb0a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2880+sha.1a9cb0a">v1.3.0-build.2880+sha.1a9cb0a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2879+sha.4a8bffe/angular-mocks.js"
                 data-name="v1.3.0-build.2879+sha.4a8bffe"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2879+sha.4a8bffe">v1.3.0-build.2879+sha.4a8bffe</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2878+sha.1fcbb69/angular-mocks.js"
                 data-name="v1.3.0-build.2878+sha.1fcbb69"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2878+sha.1fcbb69">v1.3.0-build.2878+sha.1fcbb69</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2877+sha.b7c3155/angular-mocks.js"
                 data-name="v1.3.0-build.2877+sha.b7c3155"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2877+sha.b7c3155">v1.3.0-build.2877+sha.b7c3155</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2876+sha.c0e6527/angular-mocks.js"
                 data-name="v1.3.0-build.2876+sha.c0e6527"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2876+sha.c0e6527">v1.3.0-build.2876+sha.c0e6527</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2875+sha.7e77521/angular-mocks.js"
                 data-name="v1.3.0-build.2875+sha.7e77521"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2875+sha.7e77521">v1.3.0-build.2875+sha.7e77521</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2874+sha.543cf18/angular-mocks.js"
                 data-name="v1.3.0-build.2874+sha.543cf18"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2874+sha.543cf18">v1.3.0-build.2874+sha.543cf18</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2873+sha.2f34950/angular-mocks.js"
                 data-name="v1.3.0-build.2873+sha.2f34950"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2873+sha.2f34950">v1.3.0-build.2873+sha.2f34950</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2872+sha.3991583/angular-mocks.js"
                 data-name="v1.3.0-build.2872+sha.3991583"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2872+sha.3991583">v1.3.0-build.2872+sha.3991583</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2871+sha.63e8952/angular-mocks.js"
                 data-name="v1.3.0-build.2871+sha.63e8952"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2871+sha.63e8952">v1.3.0-build.2871+sha.63e8952</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2870+sha.c90cefe/angular-mocks.js"
                 data-name="v1.3.0-build.2870+sha.c90cefe"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2870+sha.c90cefe">v1.3.0-build.2870+sha.c90cefe</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2869+sha.8121449/angular-mocks.js"
                 data-name="v1.3.0-build.2869+sha.8121449"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2869+sha.8121449">v1.3.0-build.2869+sha.8121449</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2868+sha.894c7da/angular-mocks.js"
                 data-name="v1.3.0-build.2868+sha.894c7da"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2868+sha.894c7da">v1.3.0-build.2868+sha.894c7da</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2867+sha.f07af61/angular-mocks.js"
                 data-name="v1.3.0-build.2867+sha.f07af61"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2867+sha.f07af61">v1.3.0-build.2867+sha.f07af61</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2866+sha.b0ca519/angular-mocks.js"
                 data-name="v1.3.0-build.2866+sha.b0ca519"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2866+sha.b0ca519">v1.3.0-build.2866+sha.b0ca519</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2865+sha.e18db78/angular-mocks.js"
                 data-name="v1.3.0-build.2865+sha.e18db78"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2865+sha.e18db78">v1.3.0-build.2865+sha.e18db78</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2864+sha.ca75279/angular-mocks.js"
                 data-name="v1.3.0-build.2864+sha.ca75279"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2864+sha.ca75279">v1.3.0-build.2864+sha.ca75279</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2863+sha.8252b8b/angular-mocks.js"
                 data-name="v1.3.0-build.2863+sha.8252b8b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2863+sha.8252b8b">v1.3.0-build.2863+sha.8252b8b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2860+sha.85f8b65/angular-mocks.js"
                 data-name="v1.3.0-build.2860+sha.85f8b65"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2860+sha.85f8b65">v1.3.0-build.2860+sha.85f8b65</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2859+sha.d9763f1/angular-mocks.js"
                 data-name="v1.3.0-build.2859+sha.d9763f1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2859+sha.d9763f1">v1.3.0-build.2859+sha.d9763f1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2858+sha.768a191/angular-mocks.js"
                 data-name="v1.3.0-build.2858+sha.768a191"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2858+sha.768a191">v1.3.0-build.2858+sha.768a191</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2857+sha.1f6a5a1/angular-mocks.js"
                 data-name="v1.3.0-build.2857+sha.1f6a5a1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2857+sha.1f6a5a1">v1.3.0-build.2857+sha.1f6a5a1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2856+sha.deb008d/angular-mocks.js"
                 data-name="v1.3.0-build.2856+sha.deb008d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2856+sha.deb008d">v1.3.0-build.2856+sha.deb008d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2855+sha.189cd06/angular-mocks.js"
                 data-name="v1.3.0-build.2855+sha.189cd06"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2855+sha.189cd06">v1.3.0-build.2855+sha.189cd06</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2854+sha.ceaea86/angular-mocks.js"
                 data-name="v1.3.0-build.2854+sha.ceaea86"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2854+sha.ceaea86">v1.3.0-build.2854+sha.ceaea86</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2853+sha.b1a6baa/angular-mocks.js"
                 data-name="v1.3.0-build.2853+sha.b1a6baa"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2853+sha.b1a6baa">v1.3.0-build.2853+sha.b1a6baa</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2852+sha.b1a6baa/angular-mocks.js"
                 data-name="v1.3.0-build.2852+sha.b1a6baa"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2852+sha.b1a6baa">v1.3.0-build.2852+sha.b1a6baa</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2851+sha.43ff573/angular-mocks.js"
                 data-name="v1.3.0-build.2851+sha.43ff573"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2851+sha.43ff573">v1.3.0-build.2851+sha.43ff573</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2850+sha.e8e0750/angular-mocks.js"
                 data-name="v1.3.0-build.2850+sha.e8e0750"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2850+sha.e8e0750">v1.3.0-build.2850+sha.e8e0750</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2849+sha.ea820b5/angular-mocks.js"
                 data-name="v1.3.0-build.2849+sha.ea820b5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2849+sha.ea820b5">v1.3.0-build.2849+sha.ea820b5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2848+sha.05ec6cc/angular-mocks.js"
                 data-name="v1.3.0-build.2848+sha.05ec6cc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2848+sha.05ec6cc">v1.3.0-build.2848+sha.05ec6cc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2847+sha.0885446/angular-mocks.js"
                 data-name="v1.3.0-build.2847+sha.0885446"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2847+sha.0885446">v1.3.0-build.2847+sha.0885446</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2846+sha.b775e2b/angular-mocks.js"
                 data-name="v1.3.0-build.2846+sha.b775e2b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2846+sha.b775e2b">v1.3.0-build.2846+sha.b775e2b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2845+sha.e57ad6a/angular-mocks.js"
                 data-name="v1.3.0-build.2845+sha.e57ad6a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2845+sha.e57ad6a">v1.3.0-build.2845+sha.e57ad6a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2844+sha.dafb8a3/angular-mocks.js"
                 data-name="v1.3.0-build.2844+sha.dafb8a3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2844+sha.dafb8a3">v1.3.0-build.2844+sha.dafb8a3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2843+sha.ebff4c1/angular-mocks.js"
                 data-name="v1.3.0-build.2843+sha.ebff4c1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2843+sha.ebff4c1">v1.3.0-build.2843+sha.ebff4c1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2842+sha.28e6500/angular-mocks.js"
                 data-name="v1.3.0-build.2842+sha.28e6500"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2842+sha.28e6500">v1.3.0-build.2842+sha.28e6500</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2841+sha.307e72e/angular-mocks.js"
                 data-name="v1.3.0-build.2841+sha.307e72e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2841+sha.307e72e">v1.3.0-build.2841+sha.307e72e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2840+sha.2f0a448/angular-mocks.js"
                 data-name="v1.3.0-build.2840+sha.2f0a448"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2840+sha.2f0a448">v1.3.0-build.2840+sha.2f0a448</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2839+sha.8b0258d/angular-mocks.js"
                 data-name="v1.3.0-build.2839+sha.8b0258d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2839+sha.8b0258d">v1.3.0-build.2839+sha.8b0258d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2838+sha.8b0258d/angular-mocks.js"
                 data-name="v1.3.0-build.2838+sha.8b0258d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2838+sha.8b0258d">v1.3.0-build.2838+sha.8b0258d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2837+sha.928c7ec/angular-mocks.js"
                 data-name="v1.3.0-build.2837+sha.928c7ec"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2837+sha.928c7ec">v1.3.0-build.2837+sha.928c7ec</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2836+sha.d50829b/angular-mocks.js"
                 data-name="v1.3.0-build.2836+sha.d50829b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2836+sha.d50829b">v1.3.0-build.2836+sha.d50829b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2835+sha.1e5d15c/angular-mocks.js"
                 data-name="v1.3.0-build.2835+sha.1e5d15c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2835+sha.1e5d15c">v1.3.0-build.2835+sha.1e5d15c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2834+sha.6addac3/angular-mocks.js"
                 data-name="v1.3.0-build.2834+sha.6addac3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2834+sha.6addac3">v1.3.0-build.2834+sha.6addac3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2833+sha.1e4f5cc/angular-mocks.js"
                 data-name="v1.3.0-build.2833+sha.1e4f5cc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2833+sha.1e4f5cc">v1.3.0-build.2833+sha.1e4f5cc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2832+sha.68dcb35/angular-mocks.js"
                 data-name="v1.3.0-build.2832+sha.68dcb35"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2832+sha.68dcb35">v1.3.0-build.2832+sha.68dcb35</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2831+sha.d7bfda6/angular-mocks.js"
                 data-name="v1.3.0-build.2831+sha.d7bfda6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2831+sha.d7bfda6">v1.3.0-build.2831+sha.d7bfda6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2830+sha.20c3c9e/angular-mocks.js"
                 data-name="v1.3.0-build.2830+sha.20c3c9e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2830+sha.20c3c9e">v1.3.0-build.2830+sha.20c3c9e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2829+sha.993ac8a/angular-mocks.js"
                 data-name="v1.3.0-build.2829+sha.993ac8a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2829+sha.993ac8a">v1.3.0-build.2829+sha.993ac8a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2828+sha.993ac8a/angular-mocks.js"
                 data-name="v1.3.0-build.2828+sha.993ac8a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2828+sha.993ac8a">v1.3.0-build.2828+sha.993ac8a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2827+sha.16dfcb6/angular-mocks.js"
                 data-name="v1.3.0-build.2827+sha.16dfcb6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2827+sha.16dfcb6">v1.3.0-build.2827+sha.16dfcb6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2826+sha.16dfcb6/angular-mocks.js"
                 data-name="v1.3.0-build.2826+sha.16dfcb6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2826+sha.16dfcb6">v1.3.0-build.2826+sha.16dfcb6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2825+sha.65a44dd/angular-mocks.js"
                 data-name="v1.3.0-build.2825+sha.65a44dd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2825+sha.65a44dd">v1.3.0-build.2825+sha.65a44dd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2824+sha.9971fbb/angular-mocks.js"
                 data-name="v1.3.0-build.2824+sha.9971fbb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2824+sha.9971fbb">v1.3.0-build.2824+sha.9971fbb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2823+sha.600a41a/angular-mocks.js"
                 data-name="v1.3.0-build.2823+sha.600a41a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2823+sha.600a41a">v1.3.0-build.2823+sha.600a41a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2822+sha.398053c/angular-mocks.js"
                 data-name="v1.3.0-build.2822+sha.398053c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2822+sha.398053c">v1.3.0-build.2822+sha.398053c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2821+sha.0ebab08/angular-mocks.js"
                 data-name="v1.3.0-build.2821+sha.0ebab08"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2821+sha.0ebab08">v1.3.0-build.2821+sha.0ebab08</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2820+sha.1be9bb9/angular-mocks.js"
                 data-name="v1.3.0-build.2820+sha.1be9bb9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2820+sha.1be9bb9">v1.3.0-build.2820+sha.1be9bb9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2819+sha.1be9bb9/angular-mocks.js"
                 data-name="v1.3.0-build.2819+sha.1be9bb9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2819+sha.1be9bb9">v1.3.0-build.2819+sha.1be9bb9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2818+sha.545d22b/angular-mocks.js"
                 data-name="v1.3.0-build.2818+sha.545d22b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2818+sha.545d22b">v1.3.0-build.2818+sha.545d22b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2817+sha.3de07aa/angular-mocks.js"
                 data-name="v1.3.0-build.2817+sha.3de07aa"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2817+sha.3de07aa">v1.3.0-build.2817+sha.3de07aa</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2816+sha.3de07aa/angular-mocks.js"
                 data-name="v1.3.0-build.2816+sha.3de07aa"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2816+sha.3de07aa">v1.3.0-build.2816+sha.3de07aa</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2815+sha.abf31ae/angular-mocks.js"
                 data-name="v1.3.0-build.2815+sha.abf31ae"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2815+sha.abf31ae">v1.3.0-build.2815+sha.abf31ae</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2814+sha.dd1d189/angular-mocks.js"
                 data-name="v1.3.0-build.2814+sha.dd1d189"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2814+sha.dd1d189">v1.3.0-build.2814+sha.dd1d189</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2813+sha.b32d0f8/angular-mocks.js"
                 data-name="v1.3.0-build.2813+sha.b32d0f8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2813+sha.b32d0f8">v1.3.0-build.2813+sha.b32d0f8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2812+sha.2d5a849/angular-mocks.js"
                 data-name="v1.3.0-build.2812+sha.2d5a849"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2812+sha.2d5a849">v1.3.0-build.2812+sha.2d5a849</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2811+sha.2d5a849/angular-mocks.js"
                 data-name="v1.3.0-build.2811+sha.2d5a849"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2811+sha.2d5a849">v1.3.0-build.2811+sha.2d5a849</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2810+sha.adcc5a0/angular-mocks.js"
                 data-name="v1.3.0-build.2810+sha.adcc5a0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2810+sha.adcc5a0">v1.3.0-build.2810+sha.adcc5a0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2809+sha.94bcc03/angular-mocks.js"
                 data-name="v1.3.0-build.2809+sha.94bcc03"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2809+sha.94bcc03">v1.3.0-build.2809+sha.94bcc03</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2808+sha.d8e4093/angular-mocks.js"
                 data-name="v1.3.0-build.2808+sha.d8e4093"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2808+sha.d8e4093">v1.3.0-build.2808+sha.d8e4093</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2807+sha.2cde927/angular-mocks.js"
                 data-name="v1.3.0-build.2807+sha.2cde927"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2807+sha.2cde927">v1.3.0-build.2807+sha.2cde927</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2805+sha.751ebc1/angular-mocks.js"
                 data-name="v1.3.0-build.2805+sha.751ebc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2805+sha.751ebc1">v1.3.0-build.2805+sha.751ebc1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2804+sha.560f008/angular-mocks.js"
                 data-name="v1.3.0-build.2804+sha.560f008"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2804+sha.560f008">v1.3.0-build.2804+sha.560f008</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2803+sha.ebf59b4/angular-mocks.js"
                 data-name="v1.3.0-build.2803+sha.ebf59b4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2803+sha.ebf59b4">v1.3.0-build.2803+sha.ebf59b4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2802+sha.808dab8/angular-mocks.js"
                 data-name="v1.3.0-build.2802+sha.808dab8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2802+sha.808dab8">v1.3.0-build.2802+sha.808dab8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2801+sha.ff791c9/angular-mocks.js"
                 data-name="v1.3.0-build.2801+sha.ff791c9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2801+sha.ff791c9">v1.3.0-build.2801+sha.ff791c9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2800+sha.c97c5ce/angular-mocks.js"
                 data-name="v1.3.0-build.2800+sha.c97c5ce"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2800+sha.c97c5ce">v1.3.0-build.2800+sha.c97c5ce</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2799+sha.ee8fae8/angular-mocks.js"
                 data-name="v1.3.0-build.2799+sha.ee8fae8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2799+sha.ee8fae8">v1.3.0-build.2799+sha.ee8fae8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2798+sha.1ec6d55/angular-mocks.js"
                 data-name="v1.3.0-build.2798+sha.1ec6d55"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2798+sha.1ec6d55">v1.3.0-build.2798+sha.1ec6d55</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2797+sha.1d90744/angular-mocks.js"
                 data-name="v1.3.0-build.2797+sha.1d90744"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2797+sha.1d90744">v1.3.0-build.2797+sha.1d90744</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2795+sha.222d473/angular-mocks.js"
                 data-name="v1.3.0-build.2795+sha.222d473"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2795+sha.222d473">v1.3.0-build.2795+sha.222d473</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2794+sha.24c844d/angular-mocks.js"
                 data-name="v1.3.0-build.2794+sha.24c844d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2794+sha.24c844d">v1.3.0-build.2794+sha.24c844d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2793+sha.0eb2c2a/angular-mocks.js"
                 data-name="v1.3.0-build.2793+sha.0eb2c2a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2793+sha.0eb2c2a">v1.3.0-build.2793+sha.0eb2c2a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2792+sha.0dc35ef/angular-mocks.js"
                 data-name="v1.3.0-build.2792+sha.0dc35ef"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2792+sha.0dc35ef">v1.3.0-build.2792+sha.0dc35ef</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2791+sha.4a57b15/angular-mocks.js"
                 data-name="v1.3.0-build.2791+sha.4a57b15"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2791+sha.4a57b15">v1.3.0-build.2791+sha.4a57b15</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2790+sha.16aa3af/angular-mocks.js"
                 data-name="v1.3.0-build.2790+sha.16aa3af"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2790+sha.16aa3af">v1.3.0-build.2790+sha.16aa3af</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2789+sha.42a367d/angular-mocks.js"
                 data-name="v1.3.0-build.2789+sha.42a367d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2789+sha.42a367d">v1.3.0-build.2789+sha.42a367d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2788+sha.5581833/angular-mocks.js"
                 data-name="v1.3.0-build.2788+sha.5581833"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2788+sha.5581833">v1.3.0-build.2788+sha.5581833</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2787+sha.5581833/angular-mocks.js"
                 data-name="v1.3.0-build.2787+sha.5581833"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2787+sha.5581833">v1.3.0-build.2787+sha.5581833</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2786+sha.10406de/angular-mocks.js"
                 data-name="v1.3.0-build.2786+sha.10406de"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2786+sha.10406de">v1.3.0-build.2786+sha.10406de</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2785+sha.dd7b508/angular-mocks.js"
                 data-name="v1.3.0-build.2785+sha.dd7b508"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2785+sha.dd7b508">v1.3.0-build.2785+sha.dd7b508</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2783+sha.a594fa5/angular-mocks.js"
                 data-name="v1.3.0-build.2783+sha.a594fa5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2783+sha.a594fa5">v1.3.0-build.2783+sha.a594fa5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2781+sha.083f496/angular-mocks.js"
                 data-name="v1.3.0-build.2781+sha.083f496"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2781+sha.083f496">v1.3.0-build.2781+sha.083f496</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2780+sha.11170ae/angular-mocks.js"
                 data-name="v1.3.0-build.2780+sha.11170ae"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2780+sha.11170ae">v1.3.0-build.2780+sha.11170ae</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2779+sha.6341224/angular-mocks.js"
                 data-name="v1.3.0-build.2779+sha.6341224"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2779+sha.6341224">v1.3.0-build.2779+sha.6341224</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2778+sha.9f5c437/angular-mocks.js"
                 data-name="v1.3.0-build.2778+sha.9f5c437"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2778+sha.9f5c437">v1.3.0-build.2778+sha.9f5c437</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2777+sha.440be33/angular-mocks.js"
                 data-name="v1.3.0-build.2777+sha.440be33"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2777+sha.440be33">v1.3.0-build.2777+sha.440be33</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2776+sha.c4b04ce/angular-mocks.js"
                 data-name="v1.3.0-build.2776+sha.c4b04ce"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2776+sha.c4b04ce">v1.3.0-build.2776+sha.c4b04ce</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2774+sha.7a9d245/angular-mocks.js"
                 data-name="v1.3.0-build.2774+sha.7a9d245"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2774+sha.7a9d245">v1.3.0-build.2774+sha.7a9d245</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2773+sha.0dbec22/angular-mocks.js"
                 data-name="v1.3.0-build.2773+sha.0dbec22"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2773+sha.0dbec22">v1.3.0-build.2773+sha.0dbec22</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2772+sha.279f00b/angular-mocks.js"
                 data-name="v1.3.0-build.2772+sha.279f00b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2772+sha.279f00b">v1.3.0-build.2772+sha.279f00b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2771+sha.4eb9522/angular-mocks.js"
                 data-name="v1.3.0-build.2771+sha.4eb9522"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2771+sha.4eb9522">v1.3.0-build.2771+sha.4eb9522</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2770+sha.2859fc4/angular-mocks.js"
                 data-name="v1.3.0-build.2770+sha.2859fc4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2770+sha.2859fc4">v1.3.0-build.2770+sha.2859fc4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2769+sha.462eefc/angular-mocks.js"
                 data-name="v1.3.0-build.2769+sha.462eefc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2769+sha.462eefc">v1.3.0-build.2769+sha.462eefc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2768+sha.462eefc/angular-mocks.js"
                 data-name="v1.3.0-build.2768+sha.462eefc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2768+sha.462eefc">v1.3.0-build.2768+sha.462eefc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2767+sha.3fc95e0/angular-mocks.js"
                 data-name="v1.3.0-build.2767+sha.3fc95e0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2767+sha.3fc95e0">v1.3.0-build.2767+sha.3fc95e0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2766+sha.3ec4af9/angular-mocks.js"
                 data-name="v1.3.0-build.2766+sha.3ec4af9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2766+sha.3ec4af9">v1.3.0-build.2766+sha.3ec4af9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2761+sha.701ed5f/angular-mocks.js"
                 data-name="v1.3.0-build.2761+sha.701ed5f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2761+sha.701ed5f">v1.3.0-build.2761+sha.701ed5f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2760+sha.fa6e411/angular-mocks.js"
                 data-name="v1.3.0-build.2760+sha.fa6e411"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2760+sha.fa6e411">v1.3.0-build.2760+sha.fa6e411</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2759+sha.3f365f5/angular-mocks.js"
                 data-name="v1.3.0-build.2759+sha.3f365f5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2759+sha.3f365f5">v1.3.0-build.2759+sha.3f365f5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2758+sha.e9fad96/angular-mocks.js"
                 data-name="v1.3.0-build.2758+sha.e9fad96"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2758+sha.e9fad96">v1.3.0-build.2758+sha.e9fad96</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2757+sha.7e1950e/angular-mocks.js"
                 data-name="v1.3.0-build.2757+sha.7e1950e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2757+sha.7e1950e">v1.3.0-build.2757+sha.7e1950e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2756+sha.abaf946/angular-mocks.js"
                 data-name="v1.3.0-build.2756+sha.abaf946"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2756+sha.abaf946">v1.3.0-build.2756+sha.abaf946</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2755+sha.abaf946/angular-mocks.js"
                 data-name="v1.3.0-build.2755+sha.abaf946"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2755+sha.abaf946">v1.3.0-build.2755+sha.abaf946</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2753+sha.f37a2da/angular-mocks.js"
                 data-name="v1.3.0-build.2753+sha.f37a2da"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2753+sha.f37a2da">v1.3.0-build.2753+sha.f37a2da</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2752+sha.f694951/angular-mocks.js"
                 data-name="v1.3.0-build.2752+sha.f694951"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2752+sha.f694951">v1.3.0-build.2752+sha.f694951</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2751+sha.6e2ab81/angular-mocks.js"
                 data-name="v1.3.0-build.2751+sha.6e2ab81"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2751+sha.6e2ab81">v1.3.0-build.2751+sha.6e2ab81</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2750+sha.1445130/angular-mocks.js"
                 data-name="v1.3.0-build.2750+sha.1445130"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2750+sha.1445130">v1.3.0-build.2750+sha.1445130</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2749+sha.eec6394/angular-mocks.js"
                 data-name="v1.3.0-build.2749+sha.eec6394"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2749+sha.eec6394">v1.3.0-build.2749+sha.eec6394</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2748+sha.1ab6e90/angular-mocks.js"
                 data-name="v1.3.0-build.2748+sha.1ab6e90"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2748+sha.1ab6e90">v1.3.0-build.2748+sha.1ab6e90</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2747+sha.1fe0d99/angular-mocks.js"
                 data-name="v1.3.0-build.2747+sha.1fe0d99"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2747+sha.1fe0d99">v1.3.0-build.2747+sha.1fe0d99</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2746+sha.f2f5a1d/angular-mocks.js"
                 data-name="v1.3.0-build.2746+sha.f2f5a1d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2746+sha.f2f5a1d">v1.3.0-build.2746+sha.f2f5a1d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2745+sha.b696822/angular-mocks.js"
                 data-name="v1.3.0-build.2745+sha.b696822"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2745+sha.b696822">v1.3.0-build.2745+sha.b696822</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2744+sha.b696822/angular-mocks.js"
                 data-name="v1.3.0-build.2744+sha.b696822"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2744+sha.b696822">v1.3.0-build.2744+sha.b696822</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2743+sha.6c3a051/angular-mocks.js"
                 data-name="v1.3.0-build.2743+sha.6c3a051"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2743+sha.6c3a051">v1.3.0-build.2743+sha.6c3a051</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2742+sha.510c328/angular-mocks.js"
                 data-name="v1.3.0-build.2742+sha.510c328"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2742+sha.510c328">v1.3.0-build.2742+sha.510c328</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2741+sha.d3163ff/angular-mocks.js"
                 data-name="v1.3.0-build.2741+sha.d3163ff"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2741+sha.d3163ff">v1.3.0-build.2741+sha.d3163ff</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2740+sha.0a3268f/angular-mocks.js"
                 data-name="v1.3.0-build.2740+sha.0a3268f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2740+sha.0a3268f">v1.3.0-build.2740+sha.0a3268f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2739+sha.d02fa32/angular-mocks.js"
                 data-name="v1.3.0-build.2739+sha.d02fa32"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2739+sha.d02fa32">v1.3.0-build.2739+sha.d02fa32</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2738+sha.f5f1fd1/angular-mocks.js"
                 data-name="v1.3.0-build.2738+sha.f5f1fd1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2738+sha.f5f1fd1">v1.3.0-build.2738+sha.f5f1fd1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2737+sha.84402b1/angular-mocks.js"
                 data-name="v1.3.0-build.2737+sha.84402b1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2737+sha.84402b1">v1.3.0-build.2737+sha.84402b1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2736+sha.d606e66/angular-mocks.js"
                 data-name="v1.3.0-build.2736+sha.d606e66"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2736+sha.d606e66">v1.3.0-build.2736+sha.d606e66</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2735+sha.326fd80/angular-mocks.js"
                 data-name="v1.3.0-build.2735+sha.326fd80"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2735+sha.326fd80">v1.3.0-build.2735+sha.326fd80</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2733+sha.7e45986/angular-mocks.js"
                 data-name="v1.3.0-build.2733+sha.7e45986"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2733+sha.7e45986">v1.3.0-build.2733+sha.7e45986</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2732+sha.21a3cea/angular-mocks.js"
                 data-name="v1.3.0-build.2732+sha.21a3cea"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2732+sha.21a3cea">v1.3.0-build.2732+sha.21a3cea</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2731+sha.d8c5586/angular-mocks.js"
                 data-name="v1.3.0-build.2731+sha.d8c5586"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2731+sha.d8c5586">v1.3.0-build.2731+sha.d8c5586</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2730+sha.92f588c/angular-mocks.js"
                 data-name="v1.3.0-build.2730+sha.92f588c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2730+sha.92f588c">v1.3.0-build.2730+sha.92f588c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2729+sha.ef13820/angular-mocks.js"
                 data-name="v1.3.0-build.2729+sha.ef13820"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2729+sha.ef13820">v1.3.0-build.2729+sha.ef13820</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2728+sha.6cb35ad/angular-mocks.js"
                 data-name="v1.3.0-build.2728+sha.6cb35ad"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2728+sha.6cb35ad">v1.3.0-build.2728+sha.6cb35ad</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2727+sha.e3375ae/angular-mocks.js"
                 data-name="v1.3.0-build.2727+sha.e3375ae"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2727+sha.e3375ae">v1.3.0-build.2727+sha.e3375ae</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2726+sha.826450d/angular-mocks.js"
                 data-name="v1.3.0-build.2726+sha.826450d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2726+sha.826450d">v1.3.0-build.2726+sha.826450d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2725+sha.16a7d54/angular-mocks.js"
                 data-name="v1.3.0-build.2725+sha.16a7d54"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2725+sha.16a7d54">v1.3.0-build.2725+sha.16a7d54</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2724+sha.9332439/angular-mocks.js"
                 data-name="v1.3.0-build.2724+sha.9332439"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2724+sha.9332439">v1.3.0-build.2724+sha.9332439</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2723+sha.ad0d3e0/angular-mocks.js"
                 data-name="v1.3.0-build.2723+sha.ad0d3e0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2723+sha.ad0d3e0">v1.3.0-build.2723+sha.ad0d3e0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2722+sha.82f45ae/angular-mocks.js"
                 data-name="v1.3.0-build.2722+sha.82f45ae"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2722+sha.82f45ae">v1.3.0-build.2722+sha.82f45ae</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2721+sha.def5b57/angular-mocks.js"
                 data-name="v1.3.0-build.2721+sha.def5b57"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2721+sha.def5b57">v1.3.0-build.2721+sha.def5b57</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2720+sha.6b52848/angular-mocks.js"
                 data-name="v1.3.0-build.2720+sha.6b52848"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2720+sha.6b52848">v1.3.0-build.2720+sha.6b52848</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2719+sha.e3f78c1/angular-mocks.js"
                 data-name="v1.3.0-build.2719+sha.e3f78c1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2719+sha.e3f78c1">v1.3.0-build.2719+sha.e3f78c1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2718+sha.e994259/angular-mocks.js"
                 data-name="v1.3.0-build.2718+sha.e994259"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2718+sha.e994259">v1.3.0-build.2718+sha.e994259</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2717+sha.f34de0b/angular-mocks.js"
                 data-name="v1.3.0-build.2717+sha.f34de0b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2717+sha.f34de0b">v1.3.0-build.2717+sha.f34de0b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2716+sha.95cdb53/angular-mocks.js"
                 data-name="v1.3.0-build.2716+sha.95cdb53"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2716+sha.95cdb53">v1.3.0-build.2716+sha.95cdb53</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2715+sha.35e53ca/angular-mocks.js"
                 data-name="v1.3.0-build.2715+sha.35e53ca"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2715+sha.35e53ca">v1.3.0-build.2715+sha.35e53ca</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2714+sha.e927193/angular-mocks.js"
                 data-name="v1.3.0-build.2714+sha.e927193"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2714+sha.e927193">v1.3.0-build.2714+sha.e927193</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2713+sha.0dfbf8a/angular-mocks.js"
                 data-name="v1.3.0-build.2713+sha.0dfbf8a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2713+sha.0dfbf8a">v1.3.0-build.2713+sha.0dfbf8a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2712+sha.d8bc44b/angular-mocks.js"
                 data-name="v1.3.0-build.2712+sha.d8bc44b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2712+sha.d8bc44b">v1.3.0-build.2712+sha.d8bc44b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2711+sha.facd904/angular-mocks.js"
                 data-name="v1.3.0-build.2711+sha.facd904"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2711+sha.facd904">v1.3.0-build.2711+sha.facd904</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2710+sha.96fa705/angular-mocks.js"
                 data-name="v1.3.0-build.2710+sha.96fa705"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2710+sha.96fa705">v1.3.0-build.2710+sha.96fa705</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2709+sha.819dd5d/angular-mocks.js"
                 data-name="v1.3.0-build.2709+sha.819dd5d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2709+sha.819dd5d">v1.3.0-build.2709+sha.819dd5d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2708+sha.5fbd618/angular-mocks.js"
                 data-name="v1.3.0-build.2708+sha.5fbd618"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2708+sha.5fbd618">v1.3.0-build.2708+sha.5fbd618</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2707+sha.63f284a/angular-mocks.js"
                 data-name="v1.3.0-build.2707+sha.63f284a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2707+sha.63f284a">v1.3.0-build.2707+sha.63f284a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2706+sha.d16102f/angular-mocks.js"
                 data-name="v1.3.0-build.2706+sha.d16102f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2706+sha.d16102f">v1.3.0-build.2706+sha.d16102f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2705+sha.d1f1a1a/angular-mocks.js"
                 data-name="v1.3.0-build.2705+sha.d1f1a1a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2705+sha.d1f1a1a">v1.3.0-build.2705+sha.d1f1a1a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2704+sha.a4ec118/angular-mocks.js"
                 data-name="v1.3.0-build.2704+sha.a4ec118"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2704+sha.a4ec118">v1.3.0-build.2704+sha.a4ec118</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2703+sha.52cae5b/angular-mocks.js"
                 data-name="v1.3.0-build.2703+sha.52cae5b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2703+sha.52cae5b">v1.3.0-build.2703+sha.52cae5b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2702+sha.d85c5e9/angular-mocks.js"
                 data-name="v1.3.0-build.2702+sha.d85c5e9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2702+sha.d85c5e9">v1.3.0-build.2702+sha.d85c5e9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2701+sha.c2c9d52/angular-mocks.js"
                 data-name="v1.3.0-build.2701+sha.c2c9d52"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2701+sha.c2c9d52">v1.3.0-build.2701+sha.c2c9d52</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2700+sha.d5a92d2/angular-mocks.js"
                 data-name="v1.3.0-build.2700+sha.d5a92d2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2700+sha.d5a92d2">v1.3.0-build.2700+sha.d5a92d2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2699+sha.35a6646/angular-mocks.js"
                 data-name="v1.3.0-build.2699+sha.35a6646"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2699+sha.35a6646">v1.3.0-build.2699+sha.35a6646</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2698+sha.81d427b/angular-mocks.js"
                 data-name="v1.3.0-build.2698+sha.81d427b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2698+sha.81d427b">v1.3.0-build.2698+sha.81d427b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2697+sha.a84344a/angular-mocks.js"
                 data-name="v1.3.0-build.2697+sha.a84344a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2697+sha.a84344a">v1.3.0-build.2697+sha.a84344a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2696+sha.7a3cbb3/angular-mocks.js"
                 data-name="v1.3.0-build.2696+sha.7a3cbb3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2696+sha.7a3cbb3">v1.3.0-build.2696+sha.7a3cbb3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2695+sha.0282ca9/angular-mocks.js"
                 data-name="v1.3.0-build.2695+sha.0282ca9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2695+sha.0282ca9">v1.3.0-build.2695+sha.0282ca9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2694+sha.5a568b4/angular-mocks.js"
                 data-name="v1.3.0-build.2694+sha.5a568b4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2694+sha.5a568b4">v1.3.0-build.2694+sha.5a568b4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2693+sha.e9bc51c/angular-mocks.js"
                 data-name="v1.3.0-build.2693+sha.e9bc51c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2693+sha.e9bc51c">v1.3.0-build.2693+sha.e9bc51c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2692+sha.7f5e0f0/angular-mocks.js"
                 data-name="v1.3.0-build.2692+sha.7f5e0f0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2692+sha.7f5e0f0">v1.3.0-build.2692+sha.7f5e0f0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2691+sha.d71dbb1/angular-mocks.js"
                 data-name="v1.3.0-build.2691+sha.d71dbb1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2691+sha.d71dbb1">v1.3.0-build.2691+sha.d71dbb1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2690+sha.be7c02c/angular-mocks.js"
                 data-name="v1.3.0-build.2690+sha.be7c02c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2690+sha.be7c02c">v1.3.0-build.2690+sha.be7c02c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2689+sha.562c4e4/angular-mocks.js"
                 data-name="v1.3.0-build.2689+sha.562c4e4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2689+sha.562c4e4">v1.3.0-build.2689+sha.562c4e4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2688+sha.a0ae07b/angular-mocks.js"
                 data-name="v1.3.0-build.2688+sha.a0ae07b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2688+sha.a0ae07b">v1.3.0-build.2688+sha.a0ae07b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2687+sha.ac37915/angular-mocks.js"
                 data-name="v1.3.0-build.2687+sha.ac37915"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2687+sha.ac37915">v1.3.0-build.2687+sha.ac37915</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2686+sha.6593d83/angular-mocks.js"
                 data-name="v1.3.0-build.2686+sha.6593d83"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2686+sha.6593d83">v1.3.0-build.2686+sha.6593d83</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2685+sha.7700024/angular-mocks.js"
                 data-name="v1.3.0-build.2685+sha.7700024"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2685+sha.7700024">v1.3.0-build.2685+sha.7700024</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2684+sha.4899e78/angular-mocks.js"
                 data-name="v1.3.0-build.2684+sha.4899e78"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2684+sha.4899e78">v1.3.0-build.2684+sha.4899e78</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2683+sha.28af74a/angular-mocks.js"
                 data-name="v1.3.0-build.2683+sha.28af74a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2683+sha.28af74a">v1.3.0-build.2683+sha.28af74a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2682+sha.88335fd/angular-mocks.js"
                 data-name="v1.3.0-build.2682+sha.88335fd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2682+sha.88335fd">v1.3.0-build.2682+sha.88335fd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2681+sha.055b738/angular-mocks.js"
                 data-name="v1.3.0-build.2681+sha.055b738"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2681+sha.055b738">v1.3.0-build.2681+sha.055b738</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2680+sha.2faa478/angular-mocks.js"
                 data-name="v1.3.0-build.2680+sha.2faa478"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2680+sha.2faa478">v1.3.0-build.2680+sha.2faa478</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2679+sha.2faa478/angular-mocks.js"
                 data-name="v1.3.0-build.2679+sha.2faa478"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2679+sha.2faa478">v1.3.0-build.2679+sha.2faa478</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2678+sha.6f9bcd3/angular-mocks.js"
                 data-name="v1.3.0-build.2678+sha.6f9bcd3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2678+sha.6f9bcd3">v1.3.0-build.2678+sha.6f9bcd3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2677+sha.e16e7df/angular-mocks.js"
                 data-name="v1.3.0-build.2677+sha.e16e7df"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2677+sha.e16e7df">v1.3.0-build.2677+sha.e16e7df</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2676+sha.2972de8/angular-mocks.js"
                 data-name="v1.3.0-build.2676+sha.2972de8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2676+sha.2972de8">v1.3.0-build.2676+sha.2972de8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2675+sha.e0e9ccd/angular-mocks.js"
                 data-name="v1.3.0-build.2675+sha.e0e9ccd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2675+sha.e0e9ccd">v1.3.0-build.2675+sha.e0e9ccd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2674+sha.3f540e3/angular-mocks.js"
                 data-name="v1.3.0-build.2674+sha.3f540e3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2674+sha.3f540e3">v1.3.0-build.2674+sha.3f540e3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2673+sha.1c0241e/angular-mocks.js"
                 data-name="v1.3.0-build.2673+sha.1c0241e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2673+sha.1c0241e">v1.3.0-build.2673+sha.1c0241e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2672+sha.8c08fcf/angular-mocks.js"
                 data-name="v1.3.0-build.2672+sha.8c08fcf"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2672+sha.8c08fcf">v1.3.0-build.2672+sha.8c08fcf</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2671+sha.e395170/angular-mocks.js"
                 data-name="v1.3.0-build.2671+sha.e395170"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2671+sha.e395170">v1.3.0-build.2671+sha.e395170</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2670+sha.627b035/angular-mocks.js"
                 data-name="v1.3.0-build.2670+sha.627b035"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2670+sha.627b035">v1.3.0-build.2670+sha.627b035</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2669+sha.8d18038/angular-mocks.js"
                 data-name="v1.3.0-build.2669+sha.8d18038"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2669+sha.8d18038">v1.3.0-build.2669+sha.8d18038</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2668+sha.2b6c2c5/angular-mocks.js"
                 data-name="v1.3.0-build.2668+sha.2b6c2c5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2668+sha.2b6c2c5">v1.3.0-build.2668+sha.2b6c2c5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2667+sha.0f4016c/angular-mocks.js"
                 data-name="v1.3.0-build.2667+sha.0f4016c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2667+sha.0f4016c">v1.3.0-build.2667+sha.0f4016c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2666+sha.c0b4e2d/angular-mocks.js"
                 data-name="v1.3.0-build.2666+sha.c0b4e2d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2666+sha.c0b4e2d">v1.3.0-build.2666+sha.c0b4e2d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2665+sha.924ee6d/angular-mocks.js"
                 data-name="v1.3.0-build.2665+sha.924ee6d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2665+sha.924ee6d">v1.3.0-build.2665+sha.924ee6d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2664+sha.cbc7496/angular-mocks.js"
                 data-name="v1.3.0-build.2664+sha.cbc7496"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2664+sha.cbc7496">v1.3.0-build.2664+sha.cbc7496</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2663+sha.69d96e8/angular-mocks.js"
                 data-name="v1.3.0-build.2663+sha.69d96e8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2663+sha.69d96e8">v1.3.0-build.2663+sha.69d96e8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2662+sha.b426424/angular-mocks.js"
                 data-name="v1.3.0-build.2662+sha.b426424"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2662+sha.b426424">v1.3.0-build.2662+sha.b426424</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2661+sha.e1d6178/angular-mocks.js"
                 data-name="v1.3.0-build.2661+sha.e1d6178"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2661+sha.e1d6178">v1.3.0-build.2661+sha.e1d6178</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2660+sha.3fb2d2a/angular-mocks.js"
                 data-name="v1.3.0-build.2660+sha.3fb2d2a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2660+sha.3fb2d2a">v1.3.0-build.2660+sha.3fb2d2a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2659+sha.e0d4c42/angular-mocks.js"
                 data-name="v1.3.0-build.2659+sha.e0d4c42"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2659+sha.e0d4c42">v1.3.0-build.2659+sha.e0d4c42</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2658+sha.ad4336f/angular-mocks.js"
                 data-name="v1.3.0-build.2658+sha.ad4336f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2658+sha.ad4336f">v1.3.0-build.2658+sha.ad4336f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2657+sha.81147a8/angular-mocks.js"
                 data-name="v1.3.0-build.2657+sha.81147a8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2657+sha.81147a8">v1.3.0-build.2657+sha.81147a8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2656+sha.82751f5/angular-mocks.js"
                 data-name="v1.3.0-build.2656+sha.82751f5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2656+sha.82751f5">v1.3.0-build.2656+sha.82751f5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2655+sha.8b8992b/angular-mocks.js"
                 data-name="v1.3.0-build.2655+sha.8b8992b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2655+sha.8b8992b">v1.3.0-build.2655+sha.8b8992b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2654+sha.60b2851/angular-mocks.js"
                 data-name="v1.3.0-build.2654+sha.60b2851"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2654+sha.60b2851">v1.3.0-build.2654+sha.60b2851</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2653+sha.f0e12ea/angular-mocks.js"
                 data-name="v1.3.0-build.2653+sha.f0e12ea"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2653+sha.f0e12ea">v1.3.0-build.2653+sha.f0e12ea</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2652+sha.28ef263/angular-mocks.js"
                 data-name="v1.3.0-build.2652+sha.28ef263"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2652+sha.28ef263">v1.3.0-build.2652+sha.28ef263</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2651+sha.8d38ec3/angular-mocks.js"
                 data-name="v1.3.0-build.2651+sha.8d38ec3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2651+sha.8d38ec3">v1.3.0-build.2651+sha.8d38ec3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2650+sha.8e404c4/angular-mocks.js"
                 data-name="v1.3.0-build.2650+sha.8e404c4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2650+sha.8e404c4">v1.3.0-build.2650+sha.8e404c4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2649+sha.7570e9f/angular-mocks.js"
                 data-name="v1.3.0-build.2649+sha.7570e9f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2649+sha.7570e9f">v1.3.0-build.2649+sha.7570e9f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2648+sha.d90f83c/angular-mocks.js"
                 data-name="v1.3.0-build.2648+sha.d90f83c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2648+sha.d90f83c">v1.3.0-build.2648+sha.d90f83c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2647+sha.fcc3a7a/angular-mocks.js"
                 data-name="v1.3.0-build.2647+sha.fcc3a7a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2647+sha.fcc3a7a">v1.3.0-build.2647+sha.fcc3a7a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2646+sha.e3814b1/angular-mocks.js"
                 data-name="v1.3.0-build.2646+sha.e3814b1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2646+sha.e3814b1">v1.3.0-build.2646+sha.e3814b1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2645+sha.0d691a6/angular-mocks.js"
                 data-name="v1.3.0-build.2645+sha.0d691a6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2645+sha.0d691a6">v1.3.0-build.2645+sha.0d691a6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2644+sha.2022fd7/angular-mocks.js"
                 data-name="v1.3.0-build.2644+sha.2022fd7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2644+sha.2022fd7">v1.3.0-build.2644+sha.2022fd7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2643+sha.e37e67e/angular-mocks.js"
                 data-name="v1.3.0-build.2643+sha.e37e67e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2643+sha.e37e67e">v1.3.0-build.2643+sha.e37e67e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2642+sha.af72f40/angular-mocks.js"
                 data-name="v1.3.0-build.2642+sha.af72f40"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2642+sha.af72f40">v1.3.0-build.2642+sha.af72f40</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2641+sha.7a543c9/angular-mocks.js"
                 data-name="v1.3.0-build.2641+sha.7a543c9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2641+sha.7a543c9">v1.3.0-build.2641+sha.7a543c9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2640+sha.7d1719e/angular-mocks.js"
                 data-name="v1.3.0-build.2640+sha.7d1719e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2640+sha.7d1719e">v1.3.0-build.2640+sha.7d1719e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2639+sha.accd35b/angular-mocks.js"
                 data-name="v1.3.0-build.2639+sha.accd35b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2639+sha.accd35b">v1.3.0-build.2639+sha.accd35b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2638+sha.e16c6aa/angular-mocks.js"
                 data-name="v1.3.0-build.2638+sha.e16c6aa"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2638+sha.e16c6aa">v1.3.0-build.2638+sha.e16c6aa</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2637+sha.305696c/angular-mocks.js"
                 data-name="v1.3.0-build.2637+sha.305696c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2637+sha.305696c">v1.3.0-build.2637+sha.305696c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2636+sha.ff03d7b/angular-mocks.js"
                 data-name="v1.3.0-build.2636+sha.ff03d7b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2636+sha.ff03d7b">v1.3.0-build.2636+sha.ff03d7b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2635+sha.498835a/angular-mocks.js"
                 data-name="v1.3.0-build.2635+sha.498835a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2635+sha.498835a">v1.3.0-build.2635+sha.498835a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2634+sha.6ac6621/angular-mocks.js"
                 data-name="v1.3.0-build.2634+sha.6ac6621"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2634+sha.6ac6621">v1.3.0-build.2634+sha.6ac6621</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2633+sha.39335d9/angular-mocks.js"
                 data-name="v1.3.0-build.2633+sha.39335d9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2633+sha.39335d9">v1.3.0-build.2633+sha.39335d9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2632+sha.737ef25/angular-mocks.js"
                 data-name="v1.3.0-build.2632+sha.737ef25"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2632+sha.737ef25">v1.3.0-build.2632+sha.737ef25</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2631+sha.e19dbc7/angular-mocks.js"
                 data-name="v1.3.0-build.2631+sha.e19dbc7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2631+sha.e19dbc7">v1.3.0-build.2631+sha.e19dbc7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2630+sha.06d0f1a/angular-mocks.js"
                 data-name="v1.3.0-build.2630+sha.06d0f1a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2630+sha.06d0f1a">v1.3.0-build.2630+sha.06d0f1a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2629+sha.eda00ce/angular-mocks.js"
                 data-name="v1.3.0-build.2629+sha.eda00ce"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2629+sha.eda00ce">v1.3.0-build.2629+sha.eda00ce</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2628+sha.eda00ce/angular-mocks.js"
                 data-name="v1.3.0-build.2628+sha.eda00ce"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2628+sha.eda00ce">v1.3.0-build.2628+sha.eda00ce</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2627+sha.8377e81/angular-mocks.js"
                 data-name="v1.3.0-build.2627+sha.8377e81"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2627+sha.8377e81">v1.3.0-build.2627+sha.8377e81</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2626+sha.828ad89/angular-mocks.js"
                 data-name="v1.3.0-build.2626+sha.828ad89"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2626+sha.828ad89">v1.3.0-build.2626+sha.828ad89</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2624+sha.8681276/angular-mocks.js"
                 data-name="v1.3.0-build.2624+sha.8681276"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2624+sha.8681276">v1.3.0-build.2624+sha.8681276</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2623+sha.92e8289/angular-mocks.js"
                 data-name="v1.3.0-build.2623+sha.92e8289"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2623+sha.92e8289">v1.3.0-build.2623+sha.92e8289</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2622+sha.219648f/angular-mocks.js"
                 data-name="v1.3.0-build.2622+sha.219648f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2622+sha.219648f">v1.3.0-build.2622+sha.219648f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2621+sha.6ab7add/angular-mocks.js"
                 data-name="v1.3.0-build.2621+sha.6ab7add"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2621+sha.6ab7add">v1.3.0-build.2621+sha.6ab7add</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2620+sha.2da94a7/angular-mocks.js"
                 data-name="v1.3.0-build.2620+sha.2da94a7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2620+sha.2da94a7">v1.3.0-build.2620+sha.2da94a7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2619+sha.5ce17ef/angular-mocks.js"
                 data-name="v1.3.0-build.2619+sha.5ce17ef"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2619+sha.5ce17ef">v1.3.0-build.2619+sha.5ce17ef</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2618+sha.8570585/angular-mocks.js"
                 data-name="v1.3.0-build.2618+sha.8570585"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2618+sha.8570585">v1.3.0-build.2618+sha.8570585</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2617+sha.9178c31/angular-mocks.js"
                 data-name="v1.3.0-build.2617+sha.9178c31"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2617+sha.9178c31">v1.3.0-build.2617+sha.9178c31</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2616+sha.546cb42/angular-mocks.js"
                 data-name="v1.3.0-build.2616+sha.546cb42"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2616+sha.546cb42">v1.3.0-build.2616+sha.546cb42</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2615+sha.8d0cb30/angular-mocks.js"
                 data-name="v1.3.0-build.2615+sha.8d0cb30"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2615+sha.8d0cb30">v1.3.0-build.2615+sha.8d0cb30</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2614+sha.45c3565/angular-mocks.js"
                 data-name="v1.3.0-build.2614+sha.45c3565"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2614+sha.45c3565">v1.3.0-build.2614+sha.45c3565</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2613+sha.02fcac5/angular-mocks.js"
                 data-name="v1.3.0-build.2613+sha.02fcac5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2613+sha.02fcac5">v1.3.0-build.2613+sha.02fcac5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2610+sha.a990078/angular-mocks.js"
                 data-name="v1.3.0-build.2610+sha.a990078"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2610+sha.a990078">v1.3.0-build.2610+sha.a990078</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2609+sha.f0407d2/angular-mocks.js"
                 data-name="v1.3.0-build.2609+sha.f0407d2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2609+sha.f0407d2">v1.3.0-build.2609+sha.f0407d2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2608+sha.49e7c32/angular-mocks.js"
                 data-name="v1.3.0-build.2608+sha.49e7c32"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2608+sha.49e7c32">v1.3.0-build.2608+sha.49e7c32</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2607+sha.b2e48e6/angular-mocks.js"
                 data-name="v1.3.0-build.2607+sha.b2e48e6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2607+sha.b2e48e6">v1.3.0-build.2607+sha.b2e48e6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2606+sha.5883914/angular-mocks.js"
                 data-name="v1.3.0-build.2606+sha.5883914"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2606+sha.5883914">v1.3.0-build.2606+sha.5883914</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2605+sha.d5a2069/angular-mocks.js"
                 data-name="v1.3.0-build.2605+sha.d5a2069"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2605+sha.d5a2069">v1.3.0-build.2605+sha.d5a2069</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2603+sha.5dee9e4/angular-mocks.js"
                 data-name="v1.3.0-build.2603+sha.5dee9e4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2603+sha.5dee9e4">v1.3.0-build.2603+sha.5dee9e4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2602+sha.b10a437/angular-mocks.js"
                 data-name="v1.3.0-build.2602+sha.b10a437"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2602+sha.b10a437">v1.3.0-build.2602+sha.b10a437</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2601+sha.ede9984/angular-mocks.js"
                 data-name="v1.3.0-build.2601+sha.ede9984"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2601+sha.ede9984">v1.3.0-build.2601+sha.ede9984</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2600+sha.613a5cc/angular-mocks.js"
                 data-name="v1.3.0-build.2600+sha.613a5cc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2600+sha.613a5cc">v1.3.0-build.2600+sha.613a5cc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2599+sha.4b1695e/angular-mocks.js"
                 data-name="v1.3.0-build.2599+sha.4b1695e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2599+sha.4b1695e">v1.3.0-build.2599+sha.4b1695e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2598+sha.4b1695e/angular-mocks.js"
                 data-name="v1.3.0-build.2598+sha.4b1695e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2598+sha.4b1695e">v1.3.0-build.2598+sha.4b1695e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2597+sha.24a045c/angular-mocks.js"
                 data-name="v1.3.0-build.2597+sha.24a045c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2597+sha.24a045c">v1.3.0-build.2597+sha.24a045c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2596+sha.61a8e19/angular-mocks.js"
                 data-name="v1.3.0-build.2596+sha.61a8e19"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2596+sha.61a8e19">v1.3.0-build.2596+sha.61a8e19</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2595+sha.6609175/angular-mocks.js"
                 data-name="v1.3.0-build.2595+sha.6609175"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2595+sha.6609175">v1.3.0-build.2595+sha.6609175</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2594+sha.6743ccf/angular-mocks.js"
                 data-name="v1.3.0-build.2594+sha.6743ccf"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2594+sha.6743ccf">v1.3.0-build.2594+sha.6743ccf</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2593+sha.2ad7bb9/angular-mocks.js"
                 data-name="v1.3.0-build.2593+sha.2ad7bb9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2593+sha.2ad7bb9">v1.3.0-build.2593+sha.2ad7bb9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2592+sha.3878be5/angular-mocks.js"
                 data-name="v1.3.0-build.2592+sha.3878be5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2592+sha.3878be5">v1.3.0-build.2592+sha.3878be5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2591+sha.acfcbdf/angular-mocks.js"
                 data-name="v1.3.0-build.2591+sha.acfcbdf"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2591+sha.acfcbdf">v1.3.0-build.2591+sha.acfcbdf</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2590+sha.879b0bc/angular-mocks.js"
                 data-name="v1.3.0-build.2590+sha.879b0bc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2590+sha.879b0bc">v1.3.0-build.2590+sha.879b0bc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2589+sha.879b0bc/angular-mocks.js"
                 data-name="v1.3.0-build.2589+sha.879b0bc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2589+sha.879b0bc">v1.3.0-build.2589+sha.879b0bc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2588+sha.faec997/angular-mocks.js"
                 data-name="v1.3.0-build.2588+sha.faec997"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2588+sha.faec997">v1.3.0-build.2588+sha.faec997</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2587+sha.b389cfc/angular-mocks.js"
                 data-name="v1.3.0-build.2587+sha.b389cfc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2587+sha.b389cfc">v1.3.0-build.2587+sha.b389cfc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2586+sha.1d9ac65/angular-mocks.js"
                 data-name="v1.3.0-build.2586+sha.1d9ac65"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2586+sha.1d9ac65">v1.3.0-build.2586+sha.1d9ac65</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2585+sha.f452416/angular-mocks.js"
                 data-name="v1.3.0-build.2585+sha.f452416"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2585+sha.f452416">v1.3.0-build.2585+sha.f452416</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2584+sha.a8d4280/angular-mocks.js"
                 data-name="v1.3.0-build.2584+sha.a8d4280"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2584+sha.a8d4280">v1.3.0-build.2584+sha.a8d4280</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2583+sha.091eb83/angular-mocks.js"
                 data-name="v1.3.0-build.2583+sha.091eb83"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2583+sha.091eb83">v1.3.0-build.2583+sha.091eb83</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2582+sha.28613f0/angular-mocks.js"
                 data-name="v1.3.0-build.2582+sha.28613f0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2582+sha.28613f0">v1.3.0-build.2582+sha.28613f0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2581+sha.64d4046/angular-mocks.js"
                 data-name="v1.3.0-build.2581+sha.64d4046"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2581+sha.64d4046">v1.3.0-build.2581+sha.64d4046</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2579+sha.abddefd/angular-mocks.js"
                 data-name="v1.3.0-build.2579+sha.abddefd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2579+sha.abddefd">v1.3.0-build.2579+sha.abddefd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2578+sha.4f38ba9/angular-mocks.js"
                 data-name="v1.3.0-build.2578+sha.4f38ba9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2578+sha.4f38ba9">v1.3.0-build.2578+sha.4f38ba9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2577+sha.f7cf680/angular-mocks.js"
                 data-name="v1.3.0-build.2577+sha.f7cf680"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2577+sha.f7cf680">v1.3.0-build.2577+sha.f7cf680</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2576+sha.e101c12/angular-mocks.js"
                 data-name="v1.3.0-build.2576+sha.e101c12"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2576+sha.e101c12">v1.3.0-build.2576+sha.e101c12</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2575+sha.3d31a15/angular-mocks.js"
                 data-name="v1.3.0-build.2575+sha.3d31a15"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2575+sha.3d31a15">v1.3.0-build.2575+sha.3d31a15</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2574+sha.4ae5f7a/angular-mocks.js"
                 data-name="v1.3.0-build.2574+sha.4ae5f7a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2574+sha.4ae5f7a">v1.3.0-build.2574+sha.4ae5f7a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2573+sha.461d699/angular-mocks.js"
                 data-name="v1.3.0-build.2573+sha.461d699"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2573+sha.461d699">v1.3.0-build.2573+sha.461d699</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2572+sha.ef64169/angular-mocks.js"
                 data-name="v1.3.0-build.2572+sha.ef64169"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2572+sha.ef64169">v1.3.0-build.2572+sha.ef64169</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2571+sha.8b0b7ca/angular-mocks.js"
                 data-name="v1.3.0-build.2571+sha.8b0b7ca"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2571+sha.8b0b7ca">v1.3.0-build.2571+sha.8b0b7ca</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2570+sha.20b22f1/angular-mocks.js"
                 data-name="v1.3.0-build.2570+sha.20b22f1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2570+sha.20b22f1">v1.3.0-build.2570+sha.20b22f1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2569+sha.708f2ba/angular-mocks.js"
                 data-name="v1.3.0-build.2569+sha.708f2ba"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2569+sha.708f2ba">v1.3.0-build.2569+sha.708f2ba</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2568+sha.dbe381f/angular-mocks.js"
                 data-name="v1.3.0-build.2568+sha.dbe381f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2568+sha.dbe381f">v1.3.0-build.2568+sha.dbe381f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2567+sha.e55c8bc/angular-mocks.js"
                 data-name="v1.3.0-build.2567+sha.e55c8bc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2567+sha.e55c8bc">v1.3.0-build.2567+sha.e55c8bc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2566+sha.2845301/angular-mocks.js"
                 data-name="v1.3.0-build.2566+sha.2845301"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2566+sha.2845301">v1.3.0-build.2566+sha.2845301</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2565+sha.7b0c5b9/angular-mocks.js"
                 data-name="v1.3.0-build.2565+sha.7b0c5b9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2565+sha.7b0c5b9">v1.3.0-build.2565+sha.7b0c5b9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2564+sha.a526ae8/angular-mocks.js"
                 data-name="v1.3.0-build.2564+sha.a526ae8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2564+sha.a526ae8">v1.3.0-build.2564+sha.a526ae8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2563+sha.b63fd11/angular-mocks.js"
                 data-name="v1.3.0-build.2563+sha.b63fd11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2563+sha.b63fd11">v1.3.0-build.2563+sha.b63fd11</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2562+sha.c369563/angular-mocks.js"
                 data-name="v1.3.0-build.2562+sha.c369563"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2562+sha.c369563">v1.3.0-build.2562+sha.c369563</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2561+sha.8e2c62a/angular-mocks.js"
                 data-name="v1.3.0-build.2561+sha.8e2c62a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2561+sha.8e2c62a">v1.3.0-build.2561+sha.8e2c62a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2560+sha.7227f1a/angular-mocks.js"
                 data-name="v1.3.0-build.2560+sha.7227f1a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2560+sha.7227f1a">v1.3.0-build.2560+sha.7227f1a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2559+sha.1cb8584/angular-mocks.js"
                 data-name="v1.3.0-build.2559+sha.1cb8584"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2559+sha.1cb8584">v1.3.0-build.2559+sha.1cb8584</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2558+sha.c67bd69/angular-mocks.js"
                 data-name="v1.3.0-build.2558+sha.c67bd69"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2558+sha.c67bd69">v1.3.0-build.2558+sha.c67bd69</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2557+sha.71c11e9/angular-mocks.js"
                 data-name="v1.3.0-build.2557+sha.71c11e9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2557+sha.71c11e9">v1.3.0-build.2557+sha.71c11e9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2556+sha.c967792/angular-mocks.js"
                 data-name="v1.3.0-build.2556+sha.c967792"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2556+sha.c967792">v1.3.0-build.2556+sha.c967792</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2555+sha.83e36db/angular-mocks.js"
                 data-name="v1.3.0-build.2555+sha.83e36db"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2555+sha.83e36db">v1.3.0-build.2555+sha.83e36db</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2554+sha.83e36db/angular-mocks.js"
                 data-name="v1.3.0-build.2554+sha.83e36db"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2554+sha.83e36db">v1.3.0-build.2554+sha.83e36db</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2553+sha.599cc6b/angular-mocks.js"
                 data-name="v1.3.0-build.2553+sha.599cc6b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2553+sha.599cc6b">v1.3.0-build.2553+sha.599cc6b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2552+sha.d64d41e/angular-mocks.js"
                 data-name="v1.3.0-build.2552+sha.d64d41e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2552+sha.d64d41e">v1.3.0-build.2552+sha.d64d41e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2551+sha.ba48797/angular-mocks.js"
                 data-name="v1.3.0-build.2551+sha.ba48797"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2551+sha.ba48797">v1.3.0-build.2551+sha.ba48797</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2550+sha.f9eb324/angular-mocks.js"
                 data-name="v1.3.0-build.2550+sha.f9eb324"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2550+sha.f9eb324">v1.3.0-build.2550+sha.f9eb324</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2549+sha.862e587/angular-mocks.js"
                 data-name="v1.3.0-build.2549+sha.862e587"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2549+sha.862e587">v1.3.0-build.2549+sha.862e587</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2548+sha.6cd6ec6/angular-mocks.js"
                 data-name="v1.3.0-build.2548+sha.6cd6ec6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2548+sha.6cd6ec6">v1.3.0-build.2548+sha.6cd6ec6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2547+sha.5491667/angular-mocks.js"
                 data-name="v1.3.0-build.2547+sha.5491667"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2547+sha.5491667">v1.3.0-build.2547+sha.5491667</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2546+sha.2e3a972/angular-mocks.js"
                 data-name="v1.3.0-build.2546+sha.2e3a972"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2546+sha.2e3a972">v1.3.0-build.2546+sha.2e3a972</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2545+sha.ccfa72d/angular-mocks.js"
                 data-name="v1.3.0-build.2545+sha.ccfa72d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2545+sha.ccfa72d">v1.3.0-build.2545+sha.ccfa72d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2544+sha.7914d34/angular-mocks.js"
                 data-name="v1.3.0-build.2544+sha.7914d34"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2544+sha.7914d34">v1.3.0-build.2544+sha.7914d34</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2543+sha.10110bc/angular-mocks.js"
                 data-name="v1.3.0-build.2543+sha.10110bc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2543+sha.10110bc">v1.3.0-build.2543+sha.10110bc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2542+sha.0ed0207/angular-mocks.js"
                 data-name="v1.3.0-build.2542+sha.0ed0207"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2542+sha.0ed0207">v1.3.0-build.2542+sha.0ed0207</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2541+sha.6621adb/angular-mocks.js"
                 data-name="v1.3.0-build.2541+sha.6621adb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2541+sha.6621adb">v1.3.0-build.2541+sha.6621adb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2540+sha.789328d/angular-mocks.js"
                 data-name="v1.3.0-build.2540+sha.789328d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2540+sha.789328d">v1.3.0-build.2540+sha.789328d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2539+sha.14a2142/angular-mocks.js"
                 data-name="v1.3.0-build.2539+sha.14a2142"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2539+sha.14a2142">v1.3.0-build.2539+sha.14a2142</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2538+sha.2a4f92e/angular-mocks.js"
                 data-name="v1.3.0-build.2538+sha.2a4f92e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2538+sha.2a4f92e">v1.3.0-build.2538+sha.2a4f92e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2537+sha.47384bc/angular-mocks.js"
                 data-name="v1.3.0-build.2537+sha.47384bc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2537+sha.47384bc">v1.3.0-build.2537+sha.47384bc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2536+sha.50eb3b2/angular-mocks.js"
                 data-name="v1.3.0-build.2536+sha.50eb3b2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2536+sha.50eb3b2">v1.3.0-build.2536+sha.50eb3b2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2535+sha.876df04/angular-mocks.js"
                 data-name="v1.3.0-build.2535+sha.876df04"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2535+sha.876df04">v1.3.0-build.2535+sha.876df04</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2534+sha.908ab52/angular-mocks.js"
                 data-name="v1.3.0-build.2534+sha.908ab52"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2534+sha.908ab52">v1.3.0-build.2534+sha.908ab52</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2533+sha.ff5cf73/angular-mocks.js"
                 data-name="v1.3.0-build.2533+sha.ff5cf73"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2533+sha.ff5cf73">v1.3.0-build.2533+sha.ff5cf73</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2532+sha.f552f25/angular-mocks.js"
                 data-name="v1.3.0-build.2532+sha.f552f25"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2532+sha.f552f25">v1.3.0-build.2532+sha.f552f25</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2531+sha.ec8e395/angular-mocks.js"
                 data-name="v1.3.0-build.2531+sha.ec8e395"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2531+sha.ec8e395">v1.3.0-build.2531+sha.ec8e395</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2530+sha.d0df8c8/angular-mocks.js"
                 data-name="v1.3.0-build.2530+sha.d0df8c8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2530+sha.d0df8c8">v1.3.0-build.2530+sha.d0df8c8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2529+sha.d0df8c8/angular-mocks.js"
                 data-name="v1.3.0-build.2529+sha.d0df8c8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2529+sha.d0df8c8">v1.3.0-build.2529+sha.d0df8c8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2528+sha.b1d1cb6/angular-mocks.js"
                 data-name="v1.3.0-build.2528+sha.b1d1cb6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2528+sha.b1d1cb6">v1.3.0-build.2528+sha.b1d1cb6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2527+sha.1d2414c/angular-mocks.js"
                 data-name="v1.3.0-build.2527+sha.1d2414c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2527+sha.1d2414c">v1.3.0-build.2527+sha.1d2414c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2526+sha.9f62d9d/angular-mocks.js"
                 data-name="v1.3.0-build.2526+sha.9f62d9d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2526+sha.9f62d9d">v1.3.0-build.2526+sha.9f62d9d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2525+sha.08354ae/angular-mocks.js"
                 data-name="v1.3.0-build.2525+sha.08354ae"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2525+sha.08354ae">v1.3.0-build.2525+sha.08354ae</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2524+sha.3f9f1ad/angular-mocks.js"
                 data-name="v1.3.0-build.2524+sha.3f9f1ad"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2524+sha.3f9f1ad">v1.3.0-build.2524+sha.3f9f1ad</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2523+sha.a2aa667/angular-mocks.js"
                 data-name="v1.3.0-build.2523+sha.a2aa667"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2523+sha.a2aa667">v1.3.0-build.2523+sha.a2aa667</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2522+sha.0619e6f/angular-mocks.js"
                 data-name="v1.3.0-build.2522+sha.0619e6f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2522+sha.0619e6f">v1.3.0-build.2522+sha.0619e6f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2521+sha.545c62a/angular-mocks.js"
                 data-name="v1.3.0-build.2521+sha.545c62a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2521+sha.545c62a">v1.3.0-build.2521+sha.545c62a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2520+sha.7a7e9f4/angular-mocks.js"
                 data-name="v1.3.0-build.2520+sha.7a7e9f4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2520+sha.7a7e9f4">v1.3.0-build.2520+sha.7a7e9f4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2519+sha.489d0d4/angular-mocks.js"
                 data-name="v1.3.0-build.2519+sha.489d0d4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2519+sha.489d0d4">v1.3.0-build.2519+sha.489d0d4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2518+sha.47ba601/angular-mocks.js"
                 data-name="v1.3.0-build.2518+sha.47ba601"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2518+sha.47ba601">v1.3.0-build.2518+sha.47ba601</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2517+sha.1bebe36/angular-mocks.js"
                 data-name="v1.3.0-build.2517+sha.1bebe36"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2517+sha.1bebe36">v1.3.0-build.2517+sha.1bebe36</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2516+sha.2317af6/angular-mocks.js"
                 data-name="v1.3.0-build.2516+sha.2317af6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2516+sha.2317af6">v1.3.0-build.2516+sha.2317af6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2515+sha.3bf8d6c/angular-mocks.js"
                 data-name="v1.3.0-build.2515+sha.3bf8d6c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2515+sha.3bf8d6c">v1.3.0-build.2515+sha.3bf8d6c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2511+sha.ca1d126/angular-mocks.js"
                 data-name="v1.3.0-build.2511+sha.ca1d126"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2511+sha.ca1d126">v1.3.0-build.2511+sha.ca1d126</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2510+sha.d6bcbc7/angular-mocks.js"
                 data-name="v1.3.0-build.2510+sha.d6bcbc7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2510+sha.d6bcbc7">v1.3.0-build.2510+sha.d6bcbc7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2509+sha.d6bcbc7/angular-mocks.js"
                 data-name="v1.3.0-build.2509+sha.d6bcbc7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2509+sha.d6bcbc7">v1.3.0-build.2509+sha.d6bcbc7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2508+sha.9d07796/angular-mocks.js"
                 data-name="v1.3.0-build.2508+sha.9d07796"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2508+sha.9d07796">v1.3.0-build.2508+sha.9d07796</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2507+sha.074648e/angular-mocks.js"
                 data-name="v1.3.0-build.2507+sha.074648e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2507+sha.074648e">v1.3.0-build.2507+sha.074648e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2506+sha.008fbe5/angular-mocks.js"
                 data-name="v1.3.0-build.2506+sha.008fbe5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2506+sha.008fbe5">v1.3.0-build.2506+sha.008fbe5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2505+sha.ae342b5/angular-mocks.js"
                 data-name="v1.3.0-build.2505+sha.ae342b5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2505+sha.ae342b5">v1.3.0-build.2505+sha.ae342b5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2504+sha.726ffdc/angular-mocks.js"
                 data-name="v1.3.0-build.2504+sha.726ffdc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2504+sha.726ffdc">v1.3.0-build.2504+sha.726ffdc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2503+sha.b93ca85/angular-mocks.js"
                 data-name="v1.3.0-build.2503+sha.b93ca85"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2503+sha.b93ca85">v1.3.0-build.2503+sha.b93ca85</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2502+sha.0779b6b/angular-mocks.js"
                 data-name="v1.3.0-build.2502+sha.0779b6b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2502+sha.0779b6b">v1.3.0-build.2502+sha.0779b6b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2501+sha.6e34da6/angular-mocks.js"
                 data-name="v1.3.0-build.2501+sha.6e34da6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2501+sha.6e34da6">v1.3.0-build.2501+sha.6e34da6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2500+sha.a2acd79/angular-mocks.js"
                 data-name="v1.3.0-build.2500+sha.a2acd79"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2500+sha.a2acd79">v1.3.0-build.2500+sha.a2acd79</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2499+sha.3982d9b/angular-mocks.js"
                 data-name="v1.3.0-build.2499+sha.3982d9b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2499+sha.3982d9b">v1.3.0-build.2499+sha.3982d9b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2498+sha.ccba305/angular-mocks.js"
                 data-name="v1.3.0-build.2498+sha.ccba305"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2498+sha.ccba305">v1.3.0-build.2498+sha.ccba305</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2497+sha.3f609f9/angular-mocks.js"
                 data-name="v1.3.0-build.2497+sha.3f609f9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2497+sha.3f609f9">v1.3.0-build.2497+sha.3f609f9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2496+sha.76dbb6e/angular-mocks.js"
                 data-name="v1.3.0-build.2496+sha.76dbb6e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2496+sha.76dbb6e">v1.3.0-build.2496+sha.76dbb6e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2495+sha.4a6d4de/angular-mocks.js"
                 data-name="v1.3.0-build.2495+sha.4a6d4de"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2495+sha.4a6d4de">v1.3.0-build.2495+sha.4a6d4de</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2494+sha.b472d02/angular-mocks.js"
                 data-name="v1.3.0-build.2494+sha.b472d02"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2494+sha.b472d02">v1.3.0-build.2494+sha.b472d02</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2493+sha.8339c2e/angular-mocks.js"
                 data-name="v1.3.0-build.2493+sha.8339c2e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2493+sha.8339c2e">v1.3.0-build.2493+sha.8339c2e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2492+sha.34a10c6/angular-mocks.js"
                 data-name="v1.3.0-build.2492+sha.34a10c6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2492+sha.34a10c6">v1.3.0-build.2492+sha.34a10c6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2491+sha.635cdaa/angular-mocks.js"
                 data-name="v1.3.0-build.2491+sha.635cdaa"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2491+sha.635cdaa">v1.3.0-build.2491+sha.635cdaa</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2490+sha.c7a49b3/angular-mocks.js"
                 data-name="v1.3.0-build.2490+sha.c7a49b3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2490+sha.c7a49b3">v1.3.0-build.2490+sha.c7a49b3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2489+sha.408d958/angular-mocks.js"
                 data-name="v1.3.0-build.2489+sha.408d958"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2489+sha.408d958">v1.3.0-build.2489+sha.408d958</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2488+sha.3f2d756/angular-mocks.js"
                 data-name="v1.3.0-build.2488+sha.3f2d756"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2488+sha.3f2d756">v1.3.0-build.2488+sha.3f2d756</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2487+sha.6011145/angular-mocks.js"
                 data-name="v1.3.0-build.2487+sha.6011145"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2487+sha.6011145">v1.3.0-build.2487+sha.6011145</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2486+sha.b26fc23/angular-mocks.js"
                 data-name="v1.3.0-build.2486+sha.b26fc23"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2486+sha.b26fc23">v1.3.0-build.2486+sha.b26fc23</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2485+sha.0c930a1/angular-mocks.js"
                 data-name="v1.3.0-build.2485+sha.0c930a1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2485+sha.0c930a1">v1.3.0-build.2485+sha.0c930a1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2484+sha.2f61b2f/angular-mocks.js"
                 data-name="v1.3.0-build.2484+sha.2f61b2f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2484+sha.2f61b2f">v1.3.0-build.2484+sha.2f61b2f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2483+sha.64363af/angular-mocks.js"
                 data-name="v1.3.0-build.2483+sha.64363af"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2483+sha.64363af">v1.3.0-build.2483+sha.64363af</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2482+sha.4d4da55/angular-mocks.js"
                 data-name="v1.3.0-build.2482+sha.4d4da55"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2482+sha.4d4da55">v1.3.0-build.2482+sha.4d4da55</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2481+sha.58f5da8/angular-mocks.js"
                 data-name="v1.3.0-build.2481+sha.58f5da8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2481+sha.58f5da8">v1.3.0-build.2481+sha.58f5da8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2480+sha.fb6062f/angular-mocks.js"
                 data-name="v1.3.0-build.2480+sha.fb6062f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2480+sha.fb6062f">v1.3.0-build.2480+sha.fb6062f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2479+sha.0c65f1a/angular-mocks.js"
                 data-name="v1.3.0-build.2479+sha.0c65f1a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2479+sha.0c65f1a">v1.3.0-build.2479+sha.0c65f1a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2478+sha.f40f54c/angular-mocks.js"
                 data-name="v1.3.0-build.2478+sha.f40f54c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2478+sha.f40f54c">v1.3.0-build.2478+sha.f40f54c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2477+sha.37bc5ef/angular-mocks.js"
                 data-name="v1.3.0-build.2477+sha.37bc5ef"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2477+sha.37bc5ef">v1.3.0-build.2477+sha.37bc5ef</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2476+sha.bc42950/angular-mocks.js"
                 data-name="v1.3.0-build.2476+sha.bc42950"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2476+sha.bc42950">v1.3.0-build.2476+sha.bc42950</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2475+sha.6680b7b/angular-mocks.js"
                 data-name="v1.3.0-build.2475+sha.6680b7b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2475+sha.6680b7b">v1.3.0-build.2475+sha.6680b7b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2474+sha.c839f78/angular-mocks.js"
                 data-name="v1.3.0-build.2474+sha.c839f78"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2474+sha.c839f78">v1.3.0-build.2474+sha.c839f78</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2473+sha.f7ce415/angular-mocks.js"
                 data-name="v1.3.0-build.2473+sha.f7ce415"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2473+sha.f7ce415">v1.3.0-build.2473+sha.f7ce415</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2472+sha.4cf2adf/angular-mocks.js"
                 data-name="v1.3.0-build.2472+sha.4cf2adf"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2472+sha.4cf2adf">v1.3.0-build.2472+sha.4cf2adf</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2471+sha.2b84f43/angular-mocks.js"
                 data-name="v1.3.0-build.2471+sha.2b84f43"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2471+sha.2b84f43">v1.3.0-build.2471+sha.2b84f43</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2469+sha.299b220/angular-mocks.js"
                 data-name="v1.3.0-build.2469+sha.299b220"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2469+sha.299b220">v1.3.0-build.2469+sha.299b220</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2468+sha.78057a9/angular-mocks.js"
                 data-name="v1.3.0-build.2468+sha.78057a9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2468+sha.78057a9">v1.3.0-build.2468+sha.78057a9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2467+sha.748a6c8/angular-mocks.js"
                 data-name="v1.3.0-build.2467+sha.748a6c8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2467+sha.748a6c8">v1.3.0-build.2467+sha.748a6c8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2466+sha.ed4cd6c/angular-mocks.js"
                 data-name="v1.3.0-build.2466+sha.ed4cd6c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2466+sha.ed4cd6c">v1.3.0-build.2466+sha.ed4cd6c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2465+sha.4cc00e7/angular-mocks.js"
                 data-name="v1.3.0-build.2465+sha.4cc00e7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2465+sha.4cc00e7">v1.3.0-build.2465+sha.4cc00e7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2464+sha.f7b3684/angular-mocks.js"
                 data-name="v1.3.0-build.2464+sha.f7b3684"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2464+sha.f7b3684">v1.3.0-build.2464+sha.f7b3684</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2463+sha.f8f97f8/angular-mocks.js"
                 data-name="v1.3.0-build.2463+sha.f8f97f8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2463+sha.f8f97f8">v1.3.0-build.2463+sha.f8f97f8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2460+sha.547871e/angular-mocks.js"
                 data-name="v1.3.0-build.2460+sha.547871e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2460+sha.547871e">v1.3.0-build.2460+sha.547871e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2459+sha.a4b70cf/angular-mocks.js"
                 data-name="v1.3.0-build.2459+sha.a4b70cf"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2459+sha.a4b70cf">v1.3.0-build.2459+sha.a4b70cf</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2458+sha.c9fbb47/angular-mocks.js"
                 data-name="v1.3.0-build.2458+sha.c9fbb47"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2458+sha.c9fbb47">v1.3.0-build.2458+sha.c9fbb47</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2457+sha.ed22869/angular-mocks.js"
                 data-name="v1.3.0-build.2457+sha.ed22869"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2457+sha.ed22869">v1.3.0-build.2457+sha.ed22869</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2456+sha.e381c4d/angular-mocks.js"
                 data-name="v1.3.0-build.2456+sha.e381c4d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2456+sha.e381c4d">v1.3.0-build.2456+sha.e381c4d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2455+sha.68e84ac/angular-mocks.js"
                 data-name="v1.3.0-build.2455+sha.68e84ac"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2455+sha.68e84ac">v1.3.0-build.2455+sha.68e84ac</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2454+sha.e118a8b/angular-mocks.js"
                 data-name="v1.3.0-build.2454+sha.e118a8b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2454+sha.e118a8b">v1.3.0-build.2454+sha.e118a8b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2453+sha.e118a8b/angular-mocks.js"
                 data-name="v1.3.0-build.2453+sha.e118a8b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2453+sha.e118a8b">v1.3.0-build.2453+sha.e118a8b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2452+sha.9202767/angular-mocks.js"
                 data-name="v1.3.0-build.2452+sha.9202767"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2452+sha.9202767">v1.3.0-build.2452+sha.9202767</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2451+sha.c995b09/angular-mocks.js"
                 data-name="v1.3.0-build.2451+sha.c995b09"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2451+sha.c995b09">v1.3.0-build.2451+sha.c995b09</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2450+sha.8a96f31/angular-mocks.js"
                 data-name="v1.3.0-build.2450+sha.8a96f31"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2450+sha.8a96f31">v1.3.0-build.2450+sha.8a96f31</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2449+sha.d3aa14b/angular-mocks.js"
                 data-name="v1.3.0-build.2449+sha.d3aa14b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2449+sha.d3aa14b">v1.3.0-build.2449+sha.d3aa14b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2448+sha.cd49876/angular-mocks.js"
                 data-name="v1.3.0-build.2448+sha.cd49876"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2448+sha.cd49876">v1.3.0-build.2448+sha.cd49876</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2447+sha.55a0bc4/angular-mocks.js"
                 data-name="v1.3.0-build.2447+sha.55a0bc4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2447+sha.55a0bc4">v1.3.0-build.2447+sha.55a0bc4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2446+sha.2daaf3e/angular-mocks.js"
                 data-name="v1.3.0-build.2446+sha.2daaf3e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2446+sha.2daaf3e">v1.3.0-build.2446+sha.2daaf3e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2445+sha.e1484cd/angular-mocks.js"
                 data-name="v1.3.0-build.2445+sha.e1484cd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2445+sha.e1484cd">v1.3.0-build.2445+sha.e1484cd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2444+sha.d0781eb/angular-mocks.js"
                 data-name="v1.3.0-build.2444+sha.d0781eb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2444+sha.d0781eb">v1.3.0-build.2444+sha.d0781eb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2443+sha.d09056d/angular-mocks.js"
                 data-name="v1.3.0-build.2443+sha.d09056d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2443+sha.d09056d">v1.3.0-build.2443+sha.d09056d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2442+sha.849e447/angular-mocks.js"
                 data-name="v1.3.0-build.2442+sha.849e447"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2442+sha.849e447">v1.3.0-build.2442+sha.849e447</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2441+sha.f55278f/angular-mocks.js"
                 data-name="v1.3.0-build.2441+sha.f55278f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2441+sha.f55278f">v1.3.0-build.2441+sha.f55278f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2440+sha.df56241/angular-mocks.js"
                 data-name="v1.3.0-build.2440+sha.df56241"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2440+sha.df56241">v1.3.0-build.2440+sha.df56241</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2439+sha.91e6d1d/angular-mocks.js"
                 data-name="v1.3.0-build.2439+sha.91e6d1d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2439+sha.91e6d1d">v1.3.0-build.2439+sha.91e6d1d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2438+sha.b8cc71d/angular-mocks.js"
                 data-name="v1.3.0-build.2438+sha.b8cc71d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2438+sha.b8cc71d">v1.3.0-build.2438+sha.b8cc71d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2437+sha.511422a/angular-mocks.js"
                 data-name="v1.3.0-build.2437+sha.511422a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2437+sha.511422a">v1.3.0-build.2437+sha.511422a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2436+sha.a15d9cb/angular-mocks.js"
                 data-name="v1.3.0-build.2436+sha.a15d9cb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2436+sha.a15d9cb">v1.3.0-build.2436+sha.a15d9cb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2435+sha.9bfbb16/angular-mocks.js"
                 data-name="v1.3.0-build.2435+sha.9bfbb16"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2435+sha.9bfbb16">v1.3.0-build.2435+sha.9bfbb16</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2434+sha.2b741dc/angular-mocks.js"
                 data-name="v1.3.0-build.2434+sha.2b741dc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2434+sha.2b741dc">v1.3.0-build.2434+sha.2b741dc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2433+sha.e888dde/angular-mocks.js"
                 data-name="v1.3.0-build.2433+sha.e888dde"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2433+sha.e888dde">v1.3.0-build.2433+sha.e888dde</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2432+sha.d5294eb/angular-mocks.js"
                 data-name="v1.3.0-build.2432+sha.d5294eb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2432+sha.d5294eb">v1.3.0-build.2432+sha.d5294eb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2431+sha.44b940e/angular-mocks.js"
                 data-name="v1.3.0-build.2431+sha.44b940e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2431+sha.44b940e">v1.3.0-build.2431+sha.44b940e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2430+sha.56e73ea/angular-mocks.js"
                 data-name="v1.3.0-build.2430+sha.56e73ea"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2430+sha.56e73ea">v1.3.0-build.2430+sha.56e73ea</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2429+sha.bfb6af7/angular-mocks.js"
                 data-name="v1.3.0-build.2429+sha.bfb6af7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2429+sha.bfb6af7">v1.3.0-build.2429+sha.bfb6af7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2428+sha.d7be958/angular-mocks.js"
                 data-name="v1.3.0-build.2428+sha.d7be958"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2428+sha.d7be958">v1.3.0-build.2428+sha.d7be958</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2427+sha.53e4da8/angular-mocks.js"
                 data-name="v1.3.0-build.2427+sha.53e4da8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2427+sha.53e4da8">v1.3.0-build.2427+sha.53e4da8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2426+sha.7b5e019/angular-mocks.js"
                 data-name="v1.3.0-build.2426+sha.7b5e019"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2426+sha.7b5e019">v1.3.0-build.2426+sha.7b5e019</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2425+sha.3cc02e7/angular-mocks.js"
                 data-name="v1.3.0-build.2425+sha.3cc02e7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2425+sha.3cc02e7">v1.3.0-build.2425+sha.3cc02e7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2424+sha.79592ce/angular-mocks.js"
                 data-name="v1.3.0-build.2424+sha.79592ce"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2424+sha.79592ce">v1.3.0-build.2424+sha.79592ce</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2423+sha.a9a38d8/angular-mocks.js"
                 data-name="v1.3.0-build.2423+sha.a9a38d8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2423+sha.a9a38d8">v1.3.0-build.2423+sha.a9a38d8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2422+sha.cea44b3/angular-mocks.js"
                 data-name="v1.3.0-build.2422+sha.cea44b3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2422+sha.cea44b3">v1.3.0-build.2422+sha.cea44b3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2421+sha.e8c6b9b/angular-mocks.js"
                 data-name="v1.3.0-build.2421+sha.e8c6b9b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2421+sha.e8c6b9b">v1.3.0-build.2421+sha.e8c6b9b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2420+sha.5412372/angular-mocks.js"
                 data-name="v1.3.0-build.2420+sha.5412372"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2420+sha.5412372">v1.3.0-build.2420+sha.5412372</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2419+sha.fe0e434/angular-mocks.js"
                 data-name="v1.3.0-build.2419+sha.fe0e434"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2419+sha.fe0e434">v1.3.0-build.2419+sha.fe0e434</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2418+sha.edad4e6/angular-mocks.js"
                 data-name="v1.3.0-build.2418+sha.edad4e6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2418+sha.edad4e6">v1.3.0-build.2418+sha.edad4e6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2417+sha.f684cb0/angular-mocks.js"
                 data-name="v1.3.0-build.2417+sha.f684cb0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2417+sha.f684cb0">v1.3.0-build.2417+sha.f684cb0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2416+sha.d7717d9/angular-mocks.js"
                 data-name="v1.3.0-build.2416+sha.d7717d9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2416+sha.d7717d9">v1.3.0-build.2416+sha.d7717d9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2415+sha.247ec19/angular-mocks.js"
                 data-name="v1.3.0-build.2415+sha.247ec19"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2415+sha.247ec19">v1.3.0-build.2415+sha.247ec19</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2414+sha.78165c2/angular-mocks.js"
                 data-name="v1.3.0-build.2414+sha.78165c2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2414+sha.78165c2">v1.3.0-build.2414+sha.78165c2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2413+sha.d1214af/angular-mocks.js"
                 data-name="v1.3.0-build.2413+sha.d1214af"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.2413+sha.d1214af">v1.3.0-build.2413+sha.d1214af</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.51+sha.e888dde/angular-mocks.js"
                 data-name="v1.3.0-build.51+sha.e888dde"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-build.51+sha.e888dde">v1.3.0-build.51+sha.e888dde</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.17/angular-mocks.js"
                 data-name="v1.3.0-beta.17"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.17">v1.3.0-beta.17</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.16/angular-mocks.js"
                 data-name="v1.3.0-beta.16"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.16">v1.3.0-beta.16</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.15/angular-mocks.js"
                 data-name="v1.3.0-beta.15"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.15">v1.3.0-beta.15</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.14/angular-mocks.js"
                 data-name="v1.3.0-beta.14"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.14">v1.3.0-beta.14</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.13/angular-mocks.js"
                 data-name="v1.3.0-beta.13"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.13">v1.3.0-beta.13</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.12/angular-mocks.js"
                 data-name="v1.3.0-beta.12"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.12">v1.3.0-beta.12</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.11/angular-mocks.js"
                 data-name="v1.3.0-beta.11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.11">v1.3.0-beta.11</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.10/angular-mocks.js"
                 data-name="v1.3.0-beta.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.10">v1.3.0-beta.10</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.9/angular-mocks.js"
                 data-name="v1.3.0-beta.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.9">v1.3.0-beta.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.8/angular-mocks.js"
                 data-name="v1.3.0-beta.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.8">v1.3.0-beta.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.7/angular-mocks.js"
                 data-name="v1.3.0-beta.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.7">v1.3.0-beta.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.6/angular-mocks.js"
                 data-name="v1.3.0-beta.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.6">v1.3.0-beta.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.5/angular-mocks.js"
                 data-name="v1.3.0-beta.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.5">v1.3.0-beta.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.4/angular-mocks.js"
                 data-name="v1.3.0-beta.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.4">v1.3.0-beta.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.3/angular-mocks.js"
                 data-name="v1.3.0-beta.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.3">v1.3.0-beta.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.2-build.2412+sha.d6419d0/angular-mocks.js"
                 data-name="v1.3.0-beta.2-build.2412+sha.d6419d0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2412+sha.d6419d0">v1.3.0-beta.2-build.2412+sha.d6419d0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.2-build.2411+sha.0f13f24/angular-mocks.js"
                 data-name="v1.3.0-beta.2-build.2411+sha.0f13f24"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2411+sha.0f13f24">v1.3.0-beta.2-build.2411+sha.0f13f24</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.2-build.2410+sha.0d8de2d/angular-mocks.js"
                 data-name="v1.3.0-beta.2-build.2410+sha.0d8de2d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2410+sha.0d8de2d">v1.3.0-beta.2-build.2410+sha.0d8de2d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.2-build.2409+sha.7833ce0/angular-mocks.js"
                 data-name="v1.3.0-beta.2-build.2409+sha.7833ce0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2409+sha.7833ce0">v1.3.0-beta.2-build.2409+sha.7833ce0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.2-build.2408+sha.47ab8df/angular-mocks.js"
                 data-name="v1.3.0-beta.2-build.2408+sha.47ab8df"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2408+sha.47ab8df">v1.3.0-beta.2-build.2408+sha.47ab8df</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.2-build.2407+sha.b700282/angular-mocks.js"
                 data-name="v1.3.0-beta.2-build.2407+sha.b700282"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2407+sha.b700282">v1.3.0-beta.2-build.2407+sha.b700282</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.2-build.2406+sha.1b9395e/angular-mocks.js"
                 data-name="v1.3.0-beta.2-build.2406+sha.1b9395e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2406+sha.1b9395e">v1.3.0-beta.2-build.2406+sha.1b9395e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.2-build.2405+sha.1b9395e/angular-mocks.js"
                 data-name="v1.3.0-beta.2-build.2405+sha.1b9395e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2405+sha.1b9395e">v1.3.0-beta.2-build.2405+sha.1b9395e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.2-build.2404+sha.44d160e/angular-mocks.js"
                 data-name="v1.3.0-beta.2-build.2404+sha.44d160e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2404+sha.44d160e">v1.3.0-beta.2-build.2404+sha.44d160e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.2-build.2403+sha.4f90c9b/angular-mocks.js"
                 data-name="v1.3.0-beta.2-build.2403+sha.4f90c9b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2403+sha.4f90c9b">v1.3.0-beta.2-build.2403+sha.4f90c9b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.2-build.2402+sha.11aceac/angular-mocks.js"
                 data-name="v1.3.0-beta.2-build.2402+sha.11aceac"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2402+sha.11aceac">v1.3.0-beta.2-build.2402+sha.11aceac</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.2-build.2401+sha.f08bf6f/angular-mocks.js"
                 data-name="v1.3.0-beta.2-build.2401+sha.f08bf6f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2401+sha.f08bf6f">v1.3.0-beta.2-build.2401+sha.f08bf6f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.2/angular-mocks.js"
                 data-name="v1.3.0-beta.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.2">v1.3.0-beta.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.1/angular-mocks.js"
                 data-name="v1.3.0-beta.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.1">v1.3.0-beta.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.22-build.366+sha.76a0eb8/angular-mocks.js"
                 data-name="v1.2.22-build.366+sha.76a0eb8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.22-build.366+sha.76a0eb8">v1.2.22-build.366+sha.76a0eb8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.22-build.365+sha.ee57b4c/angular-mocks.js"
                 data-name="v1.2.22-build.365+sha.ee57b4c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.22-build.365+sha.ee57b4c">v1.2.22-build.365+sha.ee57b4c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.22-build.364+sha.29eaabc/angular-mocks.js"
                 data-name="v1.2.22-build.364+sha.29eaabc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.22-build.364+sha.29eaabc">v1.2.22-build.364+sha.29eaabc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.22-build.363+sha.2a60810/angular-mocks.js"
                 data-name="v1.2.22-build.363+sha.2a60810"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.22-build.363+sha.2a60810">v1.2.22-build.363+sha.2a60810</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.22-build.362+sha.79538af/angular-mocks.js"
                 data-name="v1.2.22-build.362+sha.79538af"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.22-build.362+sha.79538af">v1.2.22-build.362+sha.79538af</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.22-build.361+sha.bcfa64e/angular-mocks.js"
                 data-name="v1.2.22-build.361+sha.bcfa64e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.22-build.361+sha.bcfa64e">v1.2.22-build.361+sha.bcfa64e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.22-build.360+sha.bcfa64e/angular-mocks.js"
                 data-name="v1.2.22-build.360+sha.bcfa64e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.22-build.360+sha.bcfa64e">v1.2.22-build.360+sha.bcfa64e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.22-build.359+sha.b7a2dee/angular-mocks.js"
                 data-name="v1.2.22-build.359+sha.b7a2dee"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.22-build.359+sha.b7a2dee">v1.2.22-build.359+sha.b7a2dee</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.22-build.358+sha.98ff901/angular-mocks.js"
                 data-name="v1.2.22-build.358+sha.98ff901"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.22-build.358+sha.98ff901">v1.2.22-build.358+sha.98ff901</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.22-build.357+sha.428b81c/angular-mocks.js"
                 data-name="v1.2.22-build.357+sha.428b81c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.22-build.357+sha.428b81c">v1.2.22-build.357+sha.428b81c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.22-build.356+sha.c3fad11/angular-mocks.js"
                 data-name="v1.2.22-build.356+sha.c3fad11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.22-build.356+sha.c3fad11">v1.2.22-build.356+sha.c3fad11</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.22-build.355+sha.9242c58/angular-mocks.js"
                 data-name="v1.2.22-build.355+sha.9242c58"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.22-build.355+sha.9242c58">v1.2.22-build.355+sha.9242c58</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.22-build.354+sha.c286094/angular-mocks.js"
                 data-name="v1.2.22-build.354+sha.c286094"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.22-build.354+sha.c286094">v1.2.22-build.354+sha.c286094</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.22-build.353+sha.9ee0755/angular-mocks.js"
                 data-name="v1.2.22-build.353+sha.9ee0755"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.22-build.353+sha.9ee0755">v1.2.22-build.353+sha.9ee0755</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.22-build.352+sha.afe93ea/angular-mocks.js"
                 data-name="v1.2.22-build.352+sha.afe93ea"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.22-build.352+sha.afe93ea">v1.2.22-build.352+sha.afe93ea</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.22-build.351+sha.f53b53d/angular-mocks.js"
                 data-name="v1.2.22-build.351+sha.f53b53d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.22-build.351+sha.f53b53d">v1.2.22-build.351+sha.f53b53d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.22-build.349+sha.986c446/angular-mocks.js"
                 data-name="v1.2.22-build.349+sha.986c446"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.22-build.349+sha.986c446">v1.2.22-build.349+sha.986c446</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.22-build.348+sha.60366c8/angular-mocks.js"
                 data-name="v1.2.22-build.348+sha.60366c8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.22-build.348+sha.60366c8">v1.2.22-build.348+sha.60366c8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.22-build.347+sha.494c8aa/angular-mocks.js"
                 data-name="v1.2.22-build.347+sha.494c8aa"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.22-build.347+sha.494c8aa">v1.2.22-build.347+sha.494c8aa</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.22-build.346+sha.cd9459e/angular-mocks.js"
                 data-name="v1.2.22-build.346+sha.cd9459e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.22-build.346+sha.cd9459e">v1.2.22-build.346+sha.cd9459e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.22-build.345+sha.2862883/angular-mocks.js"
                 data-name="v1.2.22-build.345+sha.2862883"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.22-build.345+sha.2862883">v1.2.22-build.345+sha.2862883</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.343+sha.cd9afd9/angular-mocks.js"
                 data-name="v1.2.21-build.343+sha.cd9afd9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.343+sha.cd9afd9">v1.2.21-build.343+sha.cd9afd9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.342+sha.e25ed0d/angular-mocks.js"
                 data-name="v1.2.21-build.342+sha.e25ed0d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.342+sha.e25ed0d">v1.2.21-build.342+sha.e25ed0d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.341+sha.5d11e02/angular-mocks.js"
                 data-name="v1.2.21-build.341+sha.5d11e02"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.341+sha.5d11e02">v1.2.21-build.341+sha.5d11e02</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.340+sha.209e600/angular-mocks.js"
                 data-name="v1.2.21-build.340+sha.209e600"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.340+sha.209e600">v1.2.21-build.340+sha.209e600</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.337+sha.1111076/angular-mocks.js"
                 data-name="v1.2.21-build.337+sha.1111076"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.337+sha.1111076">v1.2.21-build.337+sha.1111076</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.335+sha.da0c5ef/angular-mocks.js"
                 data-name="v1.2.21-build.335+sha.da0c5ef"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.335+sha.da0c5ef">v1.2.21-build.335+sha.da0c5ef</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.334+sha.c280d5a/angular-mocks.js"
                 data-name="v1.2.21-build.334+sha.c280d5a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.334+sha.c280d5a">v1.2.21-build.334+sha.c280d5a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.333+sha.28c8199/angular-mocks.js"
                 data-name="v1.2.21-build.333+sha.28c8199"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.333+sha.28c8199">v1.2.21-build.333+sha.28c8199</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.332+sha.0252a98/angular-mocks.js"
                 data-name="v1.2.21-build.332+sha.0252a98"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.332+sha.0252a98">v1.2.21-build.332+sha.0252a98</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.331+sha.1c15cdc/angular-mocks.js"
                 data-name="v1.2.21-build.331+sha.1c15cdc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.331+sha.1c15cdc">v1.2.21-build.331+sha.1c15cdc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.330+sha.25eb9b7/angular-mocks.js"
                 data-name="v1.2.21-build.330+sha.25eb9b7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.330+sha.25eb9b7">v1.2.21-build.330+sha.25eb9b7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.329+sha.65f40d2/angular-mocks.js"
                 data-name="v1.2.21-build.329+sha.65f40d2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.329+sha.65f40d2">v1.2.21-build.329+sha.65f40d2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.327+sha.a17d42d/angular-mocks.js"
                 data-name="v1.2.21-build.327+sha.a17d42d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.327+sha.a17d42d">v1.2.21-build.327+sha.a17d42d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.326+sha.60af504/angular-mocks.js"
                 data-name="v1.2.21-build.326+sha.60af504"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.326+sha.60af504">v1.2.21-build.326+sha.60af504</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.325+sha.243d9ac/angular-mocks.js"
                 data-name="v1.2.21-build.325+sha.243d9ac"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.325+sha.243d9ac">v1.2.21-build.325+sha.243d9ac</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.324+sha.3c46c94/angular-mocks.js"
                 data-name="v1.2.21-build.324+sha.3c46c94"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.324+sha.3c46c94">v1.2.21-build.324+sha.3c46c94</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.323+sha.4e57e28/angular-mocks.js"
                 data-name="v1.2.21-build.323+sha.4e57e28"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.323+sha.4e57e28">v1.2.21-build.323+sha.4e57e28</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.322+sha.13289c0/angular-mocks.js"
                 data-name="v1.2.21-build.322+sha.13289c0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.322+sha.13289c0">v1.2.21-build.322+sha.13289c0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.321+sha.afdb4f1/angular-mocks.js"
                 data-name="v1.2.21-build.321+sha.afdb4f1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.321+sha.afdb4f1">v1.2.21-build.321+sha.afdb4f1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.320+sha.e7999e7/angular-mocks.js"
                 data-name="v1.2.21-build.320+sha.e7999e7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.320+sha.e7999e7">v1.2.21-build.320+sha.e7999e7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.319+sha.d175bb0/angular-mocks.js"
                 data-name="v1.2.21-build.319+sha.d175bb0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.319+sha.d175bb0">v1.2.21-build.319+sha.d175bb0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.318+sha.25d3d37/angular-mocks.js"
                 data-name="v1.2.21-build.318+sha.25d3d37"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.318+sha.25d3d37">v1.2.21-build.318+sha.25d3d37</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.315+sha.6ce5a04/angular-mocks.js"
                 data-name="v1.2.21-build.315+sha.6ce5a04"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.315+sha.6ce5a04">v1.2.21-build.315+sha.6ce5a04</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.314+sha.929064d/angular-mocks.js"
                 data-name="v1.2.21-build.314+sha.929064d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.314+sha.929064d">v1.2.21-build.314+sha.929064d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.312+sha.2a8493f/angular-mocks.js"
                 data-name="v1.2.21-build.312+sha.2a8493f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.312+sha.2a8493f">v1.2.21-build.312+sha.2a8493f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.311+sha.2f960f1/angular-mocks.js"
                 data-name="v1.2.21-build.311+sha.2f960f1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.311+sha.2f960f1">v1.2.21-build.311+sha.2f960f1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.310+sha.01387c0/angular-mocks.js"
                 data-name="v1.2.21-build.310+sha.01387c0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.310+sha.01387c0">v1.2.21-build.310+sha.01387c0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.309+sha.c0afbfa/angular-mocks.js"
                 data-name="v1.2.21-build.309+sha.c0afbfa"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.309+sha.c0afbfa">v1.2.21-build.309+sha.c0afbfa</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.308+sha.fe01a85/angular-mocks.js"
                 data-name="v1.2.21-build.308+sha.fe01a85"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.308+sha.fe01a85">v1.2.21-build.308+sha.fe01a85</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.307+sha.fe01a85/angular-mocks.js"
                 data-name="v1.2.21-build.307+sha.fe01a85"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.307+sha.fe01a85">v1.2.21-build.307+sha.fe01a85</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.302+sha.49b2a1c/angular-mocks.js"
                 data-name="v1.2.21-build.302+sha.49b2a1c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.302+sha.49b2a1c">v1.2.21-build.302+sha.49b2a1c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.301+sha.3ce56b7/angular-mocks.js"
                 data-name="v1.2.21-build.301+sha.3ce56b7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.301+sha.3ce56b7">v1.2.21-build.301+sha.3ce56b7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.300+sha.0e5d319/angular-mocks.js"
                 data-name="v1.2.21-build.300+sha.0e5d319"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.300+sha.0e5d319">v1.2.21-build.300+sha.0e5d319</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21-build.298+sha.58e94dc/angular-mocks.js"
                 data-name="v1.2.21-build.298+sha.58e94dc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21-build.298+sha.58e94dc">v1.2.21-build.298+sha.58e94dc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.21/angular-mocks.js"
                 data-name="v1.2.21"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21">v1.2.21</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.20-build.297+sha.eba192b/angular-mocks.js"
                 data-name="v1.2.20-build.297+sha.eba192b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.20-build.297+sha.eba192b">v1.2.20-build.297+sha.eba192b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.20-build.296+sha.75099e6/angular-mocks.js"
                 data-name="v1.2.20-build.296+sha.75099e6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.20-build.296+sha.75099e6">v1.2.20-build.296+sha.75099e6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.20-build.295+sha.172a409/angular-mocks.js"
                 data-name="v1.2.20-build.295+sha.172a409"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.20-build.295+sha.172a409">v1.2.20-build.295+sha.172a409</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.20-build.294+sha.23e5109/angular-mocks.js"
                 data-name="v1.2.20-build.294+sha.23e5109"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.20-build.294+sha.23e5109">v1.2.20-build.294+sha.23e5109</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.20-build.293+sha.cc84ce3/angular-mocks.js"
                 data-name="v1.2.20-build.293+sha.cc84ce3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.20-build.293+sha.cc84ce3">v1.2.20-build.293+sha.cc84ce3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.20-build.292+sha.bee2d1f/angular-mocks.js"
                 data-name="v1.2.20-build.292+sha.bee2d1f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.20-build.292+sha.bee2d1f">v1.2.20-build.292+sha.bee2d1f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.20-build.291+sha.7101a02/angular-mocks.js"
                 data-name="v1.2.20-build.291+sha.7101a02"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.20-build.291+sha.7101a02">v1.2.20-build.291+sha.7101a02</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.20-build.290+sha.888be00/angular-mocks.js"
                 data-name="v1.2.20-build.290+sha.888be00"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.20-build.290+sha.888be00">v1.2.20-build.290+sha.888be00</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.20-build.289+sha.bf55f23/angular-mocks.js"
                 data-name="v1.2.20-build.289+sha.bf55f23"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.20-build.289+sha.bf55f23">v1.2.20-build.289+sha.bf55f23</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.20-build.288+sha.ab051e7/angular-mocks.js"
                 data-name="v1.2.20-build.288+sha.ab051e7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.20-build.288+sha.ab051e7">v1.2.20-build.288+sha.ab051e7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.20-build.287+sha.a0fad24/angular-mocks.js"
                 data-name="v1.2.20-build.287+sha.a0fad24"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.20-build.287+sha.a0fad24">v1.2.20-build.287+sha.a0fad24</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.20-build.286+sha.da0e3c9/angular-mocks.js"
                 data-name="v1.2.20-build.286+sha.da0e3c9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.20-build.286+sha.da0e3c9">v1.2.20-build.286+sha.da0e3c9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.20-build.285+sha.a41c58e/angular-mocks.js"
                 data-name="v1.2.20-build.285+sha.a41c58e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.20-build.285+sha.a41c58e">v1.2.20-build.285+sha.a41c58e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.20-build.284+sha.816b842/angular-mocks.js"
                 data-name="v1.2.20-build.284+sha.816b842"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.20-build.284+sha.816b842">v1.2.20-build.284+sha.816b842</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.20-build.283+sha.873acf8/angular-mocks.js"
                 data-name="v1.2.20-build.283+sha.873acf8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.20-build.283+sha.873acf8">v1.2.20-build.283+sha.873acf8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.20-build.282+sha.9063a0c/angular-mocks.js"
                 data-name="v1.2.20-build.282+sha.9063a0c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.20-build.282+sha.9063a0c">v1.2.20-build.282+sha.9063a0c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.20-build.281+sha.03cbc0d/angular-mocks.js"
                 data-name="v1.2.20-build.281+sha.03cbc0d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.20-build.281+sha.03cbc0d">v1.2.20-build.281+sha.03cbc0d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.20-build.280+sha.931789e/angular-mocks.js"
                 data-name="v1.2.20-build.280+sha.931789e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.20-build.280+sha.931789e">v1.2.20-build.280+sha.931789e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.20-build.279+sha.9bc8077/angular-mocks.js"
                 data-name="v1.2.20-build.279+sha.9bc8077"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.20-build.279+sha.9bc8077">v1.2.20-build.279+sha.9bc8077</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.20-build.278+sha.7ca24a8/angular-mocks.js"
                 data-name="v1.2.20-build.278+sha.7ca24a8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.20-build.278+sha.7ca24a8">v1.2.20-build.278+sha.7ca24a8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.20-build.277+sha.fe6b2fb/angular-mocks.js"
                 data-name="v1.2.20-build.277+sha.fe6b2fb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.20-build.277+sha.fe6b2fb">v1.2.20-build.277+sha.fe6b2fb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.20-build.276+sha.5a22224/angular-mocks.js"
                 data-name="v1.2.20-build.276+sha.5a22224"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.20-build.276+sha.5a22224">v1.2.20-build.276+sha.5a22224</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.20-build.275+sha.d9a596a/angular-mocks.js"
                 data-name="v1.2.20-build.275+sha.d9a596a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.20-build.275+sha.d9a596a">v1.2.20-build.275+sha.d9a596a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.20-build.274+sha.d9b693b/angular-mocks.js"
                 data-name="v1.2.20-build.274+sha.d9b693b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.20-build.274+sha.d9b693b">v1.2.20-build.274+sha.d9b693b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.20-build.273+sha.2fd8dc7/angular-mocks.js"
                 data-name="v1.2.20-build.273+sha.2fd8dc7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.20-build.273+sha.2fd8dc7">v1.2.20-build.273+sha.2fd8dc7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.20-build.272+sha.01012a4/angular-mocks.js"
                 data-name="v1.2.20-build.272+sha.01012a4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.20-build.272+sha.01012a4">v1.2.20-build.272+sha.01012a4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.20-build.271+sha.ce84429/angular-mocks.js"
                 data-name="v1.2.20-build.271+sha.ce84429"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.20-build.271+sha.ce84429">v1.2.20-build.271+sha.ce84429</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.20/angular-mocks.js"
                 data-name="v1.2.20"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.20">v1.2.20</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.19-build.267+sha.43c735a/angular-mocks.js"
                 data-name="v1.2.19-build.267+sha.43c735a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.19-build.267+sha.43c735a">v1.2.19-build.267+sha.43c735a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.19-build.266+sha.43c735a/angular-mocks.js"
                 data-name="v1.2.19-build.266+sha.43c735a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.19-build.266+sha.43c735a">v1.2.19-build.266+sha.43c735a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.19-build.265+sha.ab2e83c/angular-mocks.js"
                 data-name="v1.2.19-build.265+sha.ab2e83c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.19-build.265+sha.ab2e83c">v1.2.19-build.265+sha.ab2e83c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.19-build.264+sha.e5f454c/angular-mocks.js"
                 data-name="v1.2.19-build.264+sha.e5f454c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.19-build.264+sha.e5f454c">v1.2.19-build.264+sha.e5f454c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.19-build.263+sha.67c11b9/angular-mocks.js"
                 data-name="v1.2.19-build.263+sha.67c11b9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.19-build.263+sha.67c11b9">v1.2.19-build.263+sha.67c11b9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.19-build.262+sha.5a306b7/angular-mocks.js"
                 data-name="v1.2.19-build.262+sha.5a306b7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.19-build.262+sha.5a306b7">v1.2.19-build.262+sha.5a306b7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.19-build.261+sha.8ce61bf/angular-mocks.js"
                 data-name="v1.2.19-build.261+sha.8ce61bf"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.19-build.261+sha.8ce61bf">v1.2.19-build.261+sha.8ce61bf</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.19-build.260+sha.192fecc/angular-mocks.js"
                 data-name="v1.2.19-build.260+sha.192fecc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.19-build.260+sha.192fecc">v1.2.19-build.260+sha.192fecc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.19-build.259+sha.2a45cea/angular-mocks.js"
                 data-name="v1.2.19-build.259+sha.2a45cea"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.19-build.259+sha.2a45cea">v1.2.19-build.259+sha.2a45cea</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.19-build.258+sha.ea653e4/angular-mocks.js"
                 data-name="v1.2.19-build.258+sha.ea653e4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.19-build.258+sha.ea653e4">v1.2.19-build.258+sha.ea653e4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.19-build.257+sha.0377744/angular-mocks.js"
                 data-name="v1.2.19-build.257+sha.0377744"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.19-build.257+sha.0377744">v1.2.19-build.257+sha.0377744</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.19-build.256+sha.8b25ea1/angular-mocks.js"
                 data-name="v1.2.19-build.256+sha.8b25ea1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.19-build.256+sha.8b25ea1">v1.2.19-build.256+sha.8b25ea1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.19-build.255+sha.d71f16e/angular-mocks.js"
                 data-name="v1.2.19-build.255+sha.d71f16e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.19-build.255+sha.d71f16e">v1.2.19-build.255+sha.d71f16e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.19-build.254+sha.ed59370/angular-mocks.js"
                 data-name="v1.2.19-build.254+sha.ed59370"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.19-build.254+sha.ed59370">v1.2.19-build.254+sha.ed59370</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.19-build.253+sha.d8e5acf/angular-mocks.js"
                 data-name="v1.2.19-build.253+sha.d8e5acf"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.19-build.253+sha.d8e5acf">v1.2.19-build.253+sha.d8e5acf</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.19-build.252+sha.af59f4e/angular-mocks.js"
                 data-name="v1.2.19-build.252+sha.af59f4e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.19-build.252+sha.af59f4e">v1.2.19-build.252+sha.af59f4e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.19-build.251+sha.24aee81/angular-mocks.js"
                 data-name="v1.2.19-build.251+sha.24aee81"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.19-build.251+sha.24aee81">v1.2.19-build.251+sha.24aee81</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.19/angular-mocks.js"
                 data-name="v1.2.19"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.19">v1.2.19</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.18-build.250+sha.f81d56e/angular-mocks.js"
                 data-name="v1.2.18-build.250+sha.f81d56e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.18-build.250+sha.f81d56e">v1.2.18-build.250+sha.f81d56e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.18-build.249+sha.f0904cf/angular-mocks.js"
                 data-name="v1.2.18-build.249+sha.f0904cf"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.18-build.249+sha.f0904cf">v1.2.18-build.249+sha.f0904cf</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.18-build.248+sha.81b7e5a/angular-mocks.js"
                 data-name="v1.2.18-build.248+sha.81b7e5a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.18-build.248+sha.81b7e5a">v1.2.18-build.248+sha.81b7e5a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.18-build.247+sha.8661a9e/angular-mocks.js"
                 data-name="v1.2.18-build.247+sha.8661a9e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.18-build.247+sha.8661a9e">v1.2.18-build.247+sha.8661a9e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.18-build.245+sha.8661a9e/angular-mocks.js"
                 data-name="v1.2.18-build.245+sha.8661a9e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.18-build.245+sha.8661a9e">v1.2.18-build.245+sha.8661a9e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.18-build.244+sha.cf63292/angular-mocks.js"
                 data-name="v1.2.18-build.244+sha.cf63292"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.18-build.244+sha.cf63292">v1.2.18-build.244+sha.cf63292</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.18-build.243+sha.14e797c/angular-mocks.js"
                 data-name="v1.2.18-build.243+sha.14e797c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.18-build.243+sha.14e797c">v1.2.18-build.243+sha.14e797c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.18-build.242+sha.82cd6b8/angular-mocks.js"
                 data-name="v1.2.18-build.242+sha.82cd6b8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.18-build.242+sha.82cd6b8">v1.2.18-build.242+sha.82cd6b8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.18-build.241+sha.6d7cc57/angular-mocks.js"
                 data-name="v1.2.18-build.241+sha.6d7cc57"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.18-build.241+sha.6d7cc57">v1.2.18-build.241+sha.6d7cc57</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.18-build.240+sha.8b86d36/angular-mocks.js"
                 data-name="v1.2.18-build.240+sha.8b86d36"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.18-build.240+sha.8b86d36">v1.2.18-build.240+sha.8b86d36</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.18-build.239+sha.a3208bf/angular-mocks.js"
                 data-name="v1.2.18-build.239+sha.a3208bf"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.18-build.239+sha.a3208bf">v1.2.18-build.239+sha.a3208bf</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.18-build.238+sha.4e1fb82/angular-mocks.js"
                 data-name="v1.2.18-build.238+sha.4e1fb82"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.18-build.238+sha.4e1fb82">v1.2.18-build.238+sha.4e1fb82</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.18-build.237+sha.ad46641/angular-mocks.js"
                 data-name="v1.2.18-build.237+sha.ad46641"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.18-build.237+sha.ad46641">v1.2.18-build.237+sha.ad46641</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.18-build.236+sha.299a327/angular-mocks.js"
                 data-name="v1.2.18-build.236+sha.299a327"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.18-build.236+sha.299a327">v1.2.18-build.236+sha.299a327</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.18-build.233+sha.e906aaf/angular-mocks.js"
                 data-name="v1.2.18-build.233+sha.e906aaf"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.18-build.233+sha.e906aaf">v1.2.18-build.233+sha.e906aaf</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.18/angular-mocks.js"
                 data-name="v1.2.18"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.18">v1.2.18</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.232+sha.6acc73f/angular-mocks.js"
                 data-name="v1.2.17-build.232+sha.6acc73f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.232+sha.6acc73f">v1.2.17-build.232+sha.6acc73f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.231+sha.a4367ab/angular-mocks.js"
                 data-name="v1.2.17-build.231+sha.a4367ab"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.231+sha.a4367ab">v1.2.17-build.231+sha.a4367ab</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.230+sha.2e0464f/angular-mocks.js"
                 data-name="v1.2.17-build.230+sha.2e0464f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.230+sha.2e0464f">v1.2.17-build.230+sha.2e0464f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.229+sha.6ffd53e/angular-mocks.js"
                 data-name="v1.2.17-build.229+sha.6ffd53e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.229+sha.6ffd53e">v1.2.17-build.229+sha.6ffd53e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.228+sha.2395bf6/angular-mocks.js"
                 data-name="v1.2.17-build.228+sha.2395bf6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.228+sha.2395bf6">v1.2.17-build.228+sha.2395bf6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.227+sha.2e5fe84/angular-mocks.js"
                 data-name="v1.2.17-build.227+sha.2e5fe84"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.227+sha.2e5fe84">v1.2.17-build.227+sha.2e5fe84</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.226+sha.b6388b3/angular-mocks.js"
                 data-name="v1.2.17-build.226+sha.b6388b3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.226+sha.b6388b3">v1.2.17-build.226+sha.b6388b3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.225+sha.9227a5d/angular-mocks.js"
                 data-name="v1.2.17-build.225+sha.9227a5d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.225+sha.9227a5d">v1.2.17-build.225+sha.9227a5d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.224+sha.fc6ce59/angular-mocks.js"
                 data-name="v1.2.17-build.224+sha.fc6ce59"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.224+sha.fc6ce59">v1.2.17-build.224+sha.fc6ce59</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.223+sha.d18d5f5/angular-mocks.js"
                 data-name="v1.2.17-build.223+sha.d18d5f5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.223+sha.d18d5f5">v1.2.17-build.223+sha.d18d5f5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.222+sha.d18d5f5/angular-mocks.js"
                 data-name="v1.2.17-build.222+sha.d18d5f5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.222+sha.d18d5f5">v1.2.17-build.222+sha.d18d5f5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.221+sha.2d9e967/angular-mocks.js"
                 data-name="v1.2.17-build.221+sha.2d9e967"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.221+sha.2d9e967">v1.2.17-build.221+sha.2d9e967</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.220+sha.bc2a5aa/angular-mocks.js"
                 data-name="v1.2.17-build.220+sha.bc2a5aa"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.220+sha.bc2a5aa">v1.2.17-build.220+sha.bc2a5aa</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.219+sha.c0b360b/angular-mocks.js"
                 data-name="v1.2.17-build.219+sha.c0b360b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.219+sha.c0b360b">v1.2.17-build.219+sha.c0b360b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.218+sha.a659049/angular-mocks.js"
                 data-name="v1.2.17-build.218+sha.a659049"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.218+sha.a659049">v1.2.17-build.218+sha.a659049</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.217+sha.a3b9b1d/angular-mocks.js"
                 data-name="v1.2.17-build.217+sha.a3b9b1d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.217+sha.a3b9b1d">v1.2.17-build.217+sha.a3b9b1d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.216+sha.3305f38/angular-mocks.js"
                 data-name="v1.2.17-build.216+sha.3305f38"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.216+sha.3305f38">v1.2.17-build.216+sha.3305f38</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.215+sha.9be4e03/angular-mocks.js"
                 data-name="v1.2.17-build.215+sha.9be4e03"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.215+sha.9be4e03">v1.2.17-build.215+sha.9be4e03</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.214+sha.85ce5d0/angular-mocks.js"
                 data-name="v1.2.17-build.214+sha.85ce5d0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.214+sha.85ce5d0">v1.2.17-build.214+sha.85ce5d0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.213+sha.b7cb454/angular-mocks.js"
                 data-name="v1.2.17-build.213+sha.b7cb454"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.213+sha.b7cb454">v1.2.17-build.213+sha.b7cb454</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.212+sha.199825e/angular-mocks.js"
                 data-name="v1.2.17-build.212+sha.199825e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.212+sha.199825e">v1.2.17-build.212+sha.199825e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.211+sha.bcdd925/angular-mocks.js"
                 data-name="v1.2.17-build.211+sha.bcdd925"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.211+sha.bcdd925">v1.2.17-build.211+sha.bcdd925</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.209+sha.46c9c94/angular-mocks.js"
                 data-name="v1.2.17-build.209+sha.46c9c94"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.209+sha.46c9c94">v1.2.17-build.209+sha.46c9c94</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.208+sha.2ad439d/angular-mocks.js"
                 data-name="v1.2.17-build.208+sha.2ad439d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.208+sha.2ad439d">v1.2.17-build.208+sha.2ad439d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.207+sha.3fbfe3f/angular-mocks.js"
                 data-name="v1.2.17-build.207+sha.3fbfe3f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.207+sha.3fbfe3f">v1.2.17-build.207+sha.3fbfe3f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.206+sha.8ff6717/angular-mocks.js"
                 data-name="v1.2.17-build.206+sha.8ff6717"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.206+sha.8ff6717">v1.2.17-build.206+sha.8ff6717</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.205+sha.2409212/angular-mocks.js"
                 data-name="v1.2.17-build.205+sha.2409212"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.205+sha.2409212">v1.2.17-build.205+sha.2409212</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.204+sha.ad08638/angular-mocks.js"
                 data-name="v1.2.17-build.204+sha.ad08638"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.204+sha.ad08638">v1.2.17-build.204+sha.ad08638</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.203+sha.093e76f/angular-mocks.js"
                 data-name="v1.2.17-build.203+sha.093e76f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.203+sha.093e76f">v1.2.17-build.203+sha.093e76f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.202+sha.28c0497/angular-mocks.js"
                 data-name="v1.2.17-build.202+sha.28c0497"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.202+sha.28c0497">v1.2.17-build.202+sha.28c0497</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.201+sha.88505d8/angular-mocks.js"
                 data-name="v1.2.17-build.201+sha.88505d8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.201+sha.88505d8">v1.2.17-build.201+sha.88505d8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.200+sha.c241a57/angular-mocks.js"
                 data-name="v1.2.17-build.200+sha.c241a57"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.200+sha.c241a57">v1.2.17-build.200+sha.c241a57</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.199+sha.b0e985f/angular-mocks.js"
                 data-name="v1.2.17-build.199+sha.b0e985f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.199+sha.b0e985f">v1.2.17-build.199+sha.b0e985f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.198+sha.a0dbd95/angular-mocks.js"
                 data-name="v1.2.17-build.198+sha.a0dbd95"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.198+sha.a0dbd95">v1.2.17-build.198+sha.a0dbd95</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.197+sha.b5391fa/angular-mocks.js"
                 data-name="v1.2.17-build.197+sha.b5391fa"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.197+sha.b5391fa">v1.2.17-build.197+sha.b5391fa</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.196+sha.c9ee20b/angular-mocks.js"
                 data-name="v1.2.17-build.196+sha.c9ee20b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.196+sha.c9ee20b">v1.2.17-build.196+sha.c9ee20b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.195+sha.adb5ee2/angular-mocks.js"
                 data-name="v1.2.17-build.195+sha.adb5ee2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.195+sha.adb5ee2">v1.2.17-build.195+sha.adb5ee2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.194+sha.78954ff/angular-mocks.js"
                 data-name="v1.2.17-build.194+sha.78954ff"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.194+sha.78954ff">v1.2.17-build.194+sha.78954ff</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.193+sha.8660572/angular-mocks.js"
                 data-name="v1.2.17-build.193+sha.8660572"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.193+sha.8660572">v1.2.17-build.193+sha.8660572</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.192+sha.c941901/angular-mocks.js"
                 data-name="v1.2.17-build.192+sha.c941901"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.192+sha.c941901">v1.2.17-build.192+sha.c941901</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.191+sha.edab80c/angular-mocks.js"
                 data-name="v1.2.17-build.191+sha.edab80c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.191+sha.edab80c">v1.2.17-build.191+sha.edab80c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.190+sha.f4bb006/angular-mocks.js"
                 data-name="v1.2.17-build.190+sha.f4bb006"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.190+sha.f4bb006">v1.2.17-build.190+sha.f4bb006</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.189+sha.cf3f709/angular-mocks.js"
                 data-name="v1.2.17-build.189+sha.cf3f709"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.189+sha.cf3f709">v1.2.17-build.189+sha.cf3f709</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.188+sha.e7eab50/angular-mocks.js"
                 data-name="v1.2.17-build.188+sha.e7eab50"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.188+sha.e7eab50">v1.2.17-build.188+sha.e7eab50</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.187+sha.d4c3d5c/angular-mocks.js"
                 data-name="v1.2.17-build.187+sha.d4c3d5c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.187+sha.d4c3d5c">v1.2.17-build.187+sha.d4c3d5c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.186+sha.279f98c/angular-mocks.js"
                 data-name="v1.2.17-build.186+sha.279f98c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.186+sha.279f98c">v1.2.17-build.186+sha.279f98c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.185+sha.acaf9be/angular-mocks.js"
                 data-name="v1.2.17-build.185+sha.acaf9be"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.185+sha.acaf9be">v1.2.17-build.185+sha.acaf9be</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.184+sha.a3f1cba/angular-mocks.js"
                 data-name="v1.2.17-build.184+sha.a3f1cba"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.184+sha.a3f1cba">v1.2.17-build.184+sha.a3f1cba</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.183+sha.4195b04/angular-mocks.js"
                 data-name="v1.2.17-build.183+sha.4195b04"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.183+sha.4195b04">v1.2.17-build.183+sha.4195b04</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.182+sha.ccc8ec8/angular-mocks.js"
                 data-name="v1.2.17-build.182+sha.ccc8ec8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.182+sha.ccc8ec8">v1.2.17-build.182+sha.ccc8ec8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.181+sha.6d8abae/angular-mocks.js"
                 data-name="v1.2.17-build.181+sha.6d8abae"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.181+sha.6d8abae">v1.2.17-build.181+sha.6d8abae</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.180+sha.cecd521/angular-mocks.js"
                 data-name="v1.2.17-build.180+sha.cecd521"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.180+sha.cecd521">v1.2.17-build.180+sha.cecd521</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.179+sha.c5e39c6/angular-mocks.js"
                 data-name="v1.2.17-build.179+sha.c5e39c6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.179+sha.c5e39c6">v1.2.17-build.179+sha.c5e39c6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.178+sha.2406084/angular-mocks.js"
                 data-name="v1.2.17-build.178+sha.2406084"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.178+sha.2406084">v1.2.17-build.178+sha.2406084</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.177+sha.bcb53de/angular-mocks.js"
                 data-name="v1.2.17-build.177+sha.bcb53de"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.177+sha.bcb53de">v1.2.17-build.177+sha.bcb53de</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.176+sha.9d4fa33/angular-mocks.js"
                 data-name="v1.2.17-build.176+sha.9d4fa33"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.176+sha.9d4fa33">v1.2.17-build.176+sha.9d4fa33</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.175+sha.de1461d/angular-mocks.js"
                 data-name="v1.2.17-build.175+sha.de1461d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.175+sha.de1461d">v1.2.17-build.175+sha.de1461d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.174+sha.2866daf/angular-mocks.js"
                 data-name="v1.2.17-build.174+sha.2866daf"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.174+sha.2866daf">v1.2.17-build.174+sha.2866daf</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.173+sha.b3de37e/angular-mocks.js"
                 data-name="v1.2.17-build.173+sha.b3de37e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.173+sha.b3de37e">v1.2.17-build.173+sha.b3de37e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.172+sha.a4cc9e1/angular-mocks.js"
                 data-name="v1.2.17-build.172+sha.a4cc9e1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.172+sha.a4cc9e1">v1.2.17-build.172+sha.a4cc9e1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.171+sha.f8a1c56/angular-mocks.js"
                 data-name="v1.2.17-build.171+sha.f8a1c56"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.171+sha.f8a1c56">v1.2.17-build.171+sha.f8a1c56</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.170+sha.e76105a/angular-mocks.js"
                 data-name="v1.2.17-build.170+sha.e76105a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.170+sha.e76105a">v1.2.17-build.170+sha.e76105a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.169+sha.14e9be2/angular-mocks.js"
                 data-name="v1.2.17-build.169+sha.14e9be2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.169+sha.14e9be2">v1.2.17-build.169+sha.14e9be2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.168+sha.dd5215e/angular-mocks.js"
                 data-name="v1.2.17-build.168+sha.dd5215e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.168+sha.dd5215e">v1.2.17-build.168+sha.dd5215e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.167+sha.eaaf496/angular-mocks.js"
                 data-name="v1.2.17-build.167+sha.eaaf496"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.167+sha.eaaf496">v1.2.17-build.167+sha.eaaf496</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.166+sha.d566c4b/angular-mocks.js"
                 data-name="v1.2.17-build.166+sha.d566c4b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.166+sha.d566c4b">v1.2.17-build.166+sha.d566c4b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.165+sha.766b962/angular-mocks.js"
                 data-name="v1.2.17-build.165+sha.766b962"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.165+sha.766b962">v1.2.17-build.165+sha.766b962</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.164+sha.0388eed/angular-mocks.js"
                 data-name="v1.2.17-build.164+sha.0388eed"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.164+sha.0388eed">v1.2.17-build.164+sha.0388eed</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.163+sha.fafcd62/angular-mocks.js"
                 data-name="v1.2.17-build.163+sha.fafcd62"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.163+sha.fafcd62">v1.2.17-build.163+sha.fafcd62</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.162+sha.5319621/angular-mocks.js"
                 data-name="v1.2.17-build.162+sha.5319621"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.162+sha.5319621">v1.2.17-build.162+sha.5319621</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.161+sha.32aa491/angular-mocks.js"
                 data-name="v1.2.17-build.161+sha.32aa491"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.161+sha.32aa491">v1.2.17-build.161+sha.32aa491</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.160+sha.31bdb60/angular-mocks.js"
                 data-name="v1.2.17-build.160+sha.31bdb60"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.160+sha.31bdb60">v1.2.17-build.160+sha.31bdb60</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.159+sha.a8aae48/angular-mocks.js"
                 data-name="v1.2.17-build.159+sha.a8aae48"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.159+sha.a8aae48">v1.2.17-build.159+sha.a8aae48</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.158+sha.1748abe/angular-mocks.js"
                 data-name="v1.2.17-build.158+sha.1748abe"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.158+sha.1748abe">v1.2.17-build.158+sha.1748abe</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.157+sha.5f5bf07/angular-mocks.js"
                 data-name="v1.2.17-build.157+sha.5f5bf07"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.157+sha.5f5bf07">v1.2.17-build.157+sha.5f5bf07</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.156+sha.3d0b49c/angular-mocks.js"
                 data-name="v1.2.17-build.156+sha.3d0b49c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.156+sha.3d0b49c">v1.2.17-build.156+sha.3d0b49c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.155+sha.b6aec56/angular-mocks.js"
                 data-name="v1.2.17-build.155+sha.b6aec56"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.155+sha.b6aec56">v1.2.17-build.155+sha.b6aec56</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.154+sha.ca273fd/angular-mocks.js"
                 data-name="v1.2.17-build.154+sha.ca273fd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.154+sha.ca273fd">v1.2.17-build.154+sha.ca273fd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.153+sha.5ff453d/angular-mocks.js"
                 data-name="v1.2.17-build.153+sha.5ff453d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.153+sha.5ff453d">v1.2.17-build.153+sha.5ff453d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.152+sha.d9c75be/angular-mocks.js"
                 data-name="v1.2.17-build.152+sha.d9c75be"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.152+sha.d9c75be">v1.2.17-build.152+sha.d9c75be</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.151+sha.e030e64/angular-mocks.js"
                 data-name="v1.2.17-build.151+sha.e030e64"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.151+sha.e030e64">v1.2.17-build.151+sha.e030e64</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.150+sha.7ba19cc/angular-mocks.js"
                 data-name="v1.2.17-build.150+sha.7ba19cc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.150+sha.7ba19cc">v1.2.17-build.150+sha.7ba19cc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.149+sha.21428e5/angular-mocks.js"
                 data-name="v1.2.17-build.149+sha.21428e5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.149+sha.21428e5">v1.2.17-build.149+sha.21428e5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.148+sha.9321a5f/angular-mocks.js"
                 data-name="v1.2.17-build.148+sha.9321a5f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.148+sha.9321a5f">v1.2.17-build.148+sha.9321a5f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.147+sha.72421b2/angular-mocks.js"
                 data-name="v1.2.17-build.147+sha.72421b2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.147+sha.72421b2">v1.2.17-build.147+sha.72421b2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.146+sha.c3fe170/angular-mocks.js"
                 data-name="v1.2.17-build.146+sha.c3fe170"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.146+sha.c3fe170">v1.2.17-build.146+sha.c3fe170</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.145+sha.ed18b8c/angular-mocks.js"
                 data-name="v1.2.17-build.145+sha.ed18b8c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.145+sha.ed18b8c">v1.2.17-build.145+sha.ed18b8c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.144+sha.0cb276f/angular-mocks.js"
                 data-name="v1.2.17-build.144+sha.0cb276f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.144+sha.0cb276f">v1.2.17-build.144+sha.0cb276f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.143+sha.0069f87/angular-mocks.js"
                 data-name="v1.2.17-build.143+sha.0069f87"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.143+sha.0069f87">v1.2.17-build.143+sha.0069f87</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.142+sha.9599234/angular-mocks.js"
                 data-name="v1.2.17-build.142+sha.9599234"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.142+sha.9599234">v1.2.17-build.142+sha.9599234</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.141+sha.d423117/angular-mocks.js"
                 data-name="v1.2.17-build.141+sha.d423117"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.141+sha.d423117">v1.2.17-build.141+sha.d423117</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.140+sha.3c8a940/angular-mocks.js"
                 data-name="v1.2.17-build.140+sha.3c8a940"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.140+sha.3c8a940">v1.2.17-build.140+sha.3c8a940</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.139+sha.9f8e30f/angular-mocks.js"
                 data-name="v1.2.17-build.139+sha.9f8e30f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.139+sha.9f8e30f">v1.2.17-build.139+sha.9f8e30f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.138+sha.dcd94a2/angular-mocks.js"
                 data-name="v1.2.17-build.138+sha.dcd94a2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.138+sha.dcd94a2">v1.2.17-build.138+sha.dcd94a2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.137+sha.9b79a00/angular-mocks.js"
                 data-name="v1.2.17-build.137+sha.9b79a00"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.137+sha.9b79a00">v1.2.17-build.137+sha.9b79a00</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.136+sha.02058bf/angular-mocks.js"
                 data-name="v1.2.17-build.136+sha.02058bf"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.136+sha.02058bf">v1.2.17-build.136+sha.02058bf</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.135+sha.76647d3/angular-mocks.js"
                 data-name="v1.2.17-build.135+sha.76647d3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.135+sha.76647d3">v1.2.17-build.135+sha.76647d3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.134+sha.1f1cad8/angular-mocks.js"
                 data-name="v1.2.17-build.134+sha.1f1cad8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.134+sha.1f1cad8">v1.2.17-build.134+sha.1f1cad8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.133+sha.e1f1d65/angular-mocks.js"
                 data-name="v1.2.17-build.133+sha.e1f1d65"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.133+sha.e1f1d65">v1.2.17-build.133+sha.e1f1d65</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.132+sha.a5df2d4/angular-mocks.js"
                 data-name="v1.2.17-build.132+sha.a5df2d4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.132+sha.a5df2d4">v1.2.17-build.132+sha.a5df2d4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.131+sha.b6514d9/angular-mocks.js"
                 data-name="v1.2.17-build.131+sha.b6514d9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.131+sha.b6514d9">v1.2.17-build.131+sha.b6514d9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.130+sha.9ab9bf6/angular-mocks.js"
                 data-name="v1.2.17-build.130+sha.9ab9bf6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.130+sha.9ab9bf6">v1.2.17-build.130+sha.9ab9bf6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.129+sha.e7e56fe/angular-mocks.js"
                 data-name="v1.2.17-build.129+sha.e7e56fe"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.129+sha.e7e56fe">v1.2.17-build.129+sha.e7e56fe</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.128+sha.050aae3/angular-mocks.js"
                 data-name="v1.2.17-build.128+sha.050aae3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.128+sha.050aae3">v1.2.17-build.128+sha.050aae3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.126+sha.2dc2265/angular-mocks.js"
                 data-name="v1.2.17-build.126+sha.2dc2265"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.126+sha.2dc2265">v1.2.17-build.126+sha.2dc2265</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.125+sha.1db20ce/angular-mocks.js"
                 data-name="v1.2.17-build.125+sha.1db20ce"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.125+sha.1db20ce">v1.2.17-build.125+sha.1db20ce</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.124+sha.76cb5ce/angular-mocks.js"
                 data-name="v1.2.17-build.124+sha.76cb5ce"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.124+sha.76cb5ce">v1.2.17-build.124+sha.76cb5ce</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.123+sha.2a778d0/angular-mocks.js"
                 data-name="v1.2.17-build.123+sha.2a778d0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.123+sha.2a778d0">v1.2.17-build.123+sha.2a778d0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.122+sha.7839330/angular-mocks.js"
                 data-name="v1.2.17-build.122+sha.7839330"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.122+sha.7839330">v1.2.17-build.122+sha.7839330</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.121+sha.2d7cb14/angular-mocks.js"
                 data-name="v1.2.17-build.121+sha.2d7cb14"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.121+sha.2d7cb14">v1.2.17-build.121+sha.2d7cb14</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.119+sha.227822d/angular-mocks.js"
                 data-name="v1.2.17-build.119+sha.227822d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.119+sha.227822d">v1.2.17-build.119+sha.227822d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.118+sha.92f6b45/angular-mocks.js"
                 data-name="v1.2.17-build.118+sha.92f6b45"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.118+sha.92f6b45">v1.2.17-build.118+sha.92f6b45</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.117+sha.24f7999/angular-mocks.js"
                 data-name="v1.2.17-build.117+sha.24f7999"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.117+sha.24f7999">v1.2.17-build.117+sha.24f7999</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.116+sha.b6eb5fd/angular-mocks.js"
                 data-name="v1.2.17-build.116+sha.b6eb5fd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.116+sha.b6eb5fd">v1.2.17-build.116+sha.b6eb5fd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.115+sha.5bf6e50/angular-mocks.js"
                 data-name="v1.2.17-build.115+sha.5bf6e50"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.115+sha.5bf6e50">v1.2.17-build.115+sha.5bf6e50</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.113+sha.373078a/angular-mocks.js"
                 data-name="v1.2.17-build.113+sha.373078a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.113+sha.373078a">v1.2.17-build.113+sha.373078a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.112+sha.db07ad2/angular-mocks.js"
                 data-name="v1.2.17-build.112+sha.db07ad2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.112+sha.db07ad2">v1.2.17-build.112+sha.db07ad2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.111+sha.19d7a12/angular-mocks.js"
                 data-name="v1.2.17-build.111+sha.19d7a12"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.111+sha.19d7a12">v1.2.17-build.111+sha.19d7a12</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.110+sha.f5a04f5/angular-mocks.js"
                 data-name="v1.2.17-build.110+sha.f5a04f5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.110+sha.f5a04f5">v1.2.17-build.110+sha.f5a04f5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.109+sha.ab92da4/angular-mocks.js"
                 data-name="v1.2.17-build.109+sha.ab92da4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.109+sha.ab92da4">v1.2.17-build.109+sha.ab92da4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.108+sha.6782c45/angular-mocks.js"
                 data-name="v1.2.17-build.108+sha.6782c45"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.108+sha.6782c45">v1.2.17-build.108+sha.6782c45</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.107+sha.2e2d62c/angular-mocks.js"
                 data-name="v1.2.17-build.107+sha.2e2d62c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.107+sha.2e2d62c">v1.2.17-build.107+sha.2e2d62c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.106+sha.e3141fe/angular-mocks.js"
                 data-name="v1.2.17-build.106+sha.e3141fe"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.106+sha.e3141fe">v1.2.17-build.106+sha.e3141fe</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.105+sha.1ebed26/angular-mocks.js"
                 data-name="v1.2.17-build.105+sha.1ebed26"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.105+sha.1ebed26">v1.2.17-build.105+sha.1ebed26</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.104+sha.e987efd/angular-mocks.js"
                 data-name="v1.2.17-build.104+sha.e987efd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.104+sha.e987efd">v1.2.17-build.104+sha.e987efd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.103+sha.ea72e5f/angular-mocks.js"
                 data-name="v1.2.17-build.103+sha.ea72e5f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.103+sha.ea72e5f">v1.2.17-build.103+sha.ea72e5f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.102+sha.c550c12/angular-mocks.js"
                 data-name="v1.2.17-build.102+sha.c550c12"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.102+sha.c550c12">v1.2.17-build.102+sha.c550c12</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.101+sha.45855b8/angular-mocks.js"
                 data-name="v1.2.17-build.101+sha.45855b8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.101+sha.45855b8">v1.2.17-build.101+sha.45855b8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.100+sha.feb54d6/angular-mocks.js"
                 data-name="v1.2.17-build.100+sha.feb54d6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.100+sha.feb54d6">v1.2.17-build.100+sha.feb54d6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.98+sha.ebd9a2a/angular-mocks.js"
                 data-name="v1.2.17-build.98+sha.ebd9a2a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.98+sha.ebd9a2a">v1.2.17-build.98+sha.ebd9a2a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.97+sha.cf8ed01/angular-mocks.js"
                 data-name="v1.2.17-build.97+sha.cf8ed01"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.97+sha.cf8ed01">v1.2.17-build.97+sha.cf8ed01</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.96+sha.c352b92/angular-mocks.js"
                 data-name="v1.2.17-build.96+sha.c352b92"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.96+sha.c352b92">v1.2.17-build.96+sha.c352b92</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.95+sha.3691454/angular-mocks.js"
                 data-name="v1.2.17-build.95+sha.3691454"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.95+sha.3691454">v1.2.17-build.95+sha.3691454</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.94+sha.c3ec6ea/angular-mocks.js"
                 data-name="v1.2.17-build.94+sha.c3ec6ea"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.94+sha.c3ec6ea">v1.2.17-build.94+sha.c3ec6ea</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.93+sha.d761535/angular-mocks.js"
                 data-name="v1.2.17-build.93+sha.d761535"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.93+sha.d761535">v1.2.17-build.93+sha.d761535</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.92+sha.a97a172/angular-mocks.js"
                 data-name="v1.2.17-build.92+sha.a97a172"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.92+sha.a97a172">v1.2.17-build.92+sha.a97a172</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.91+sha.d53a787/angular-mocks.js"
                 data-name="v1.2.17-build.91+sha.d53a787"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.91+sha.d53a787">v1.2.17-build.91+sha.d53a787</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.90+sha.9682bd0/angular-mocks.js"
                 data-name="v1.2.17-build.90+sha.9682bd0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.90+sha.9682bd0">v1.2.17-build.90+sha.9682bd0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.89+sha.34d0740/angular-mocks.js"
                 data-name="v1.2.17-build.89+sha.34d0740"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.89+sha.34d0740">v1.2.17-build.89+sha.34d0740</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.88+sha.4d9efa2/angular-mocks.js"
                 data-name="v1.2.17-build.88+sha.4d9efa2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.88+sha.4d9efa2">v1.2.17-build.88+sha.4d9efa2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.87+sha.0f37e49/angular-mocks.js"
                 data-name="v1.2.17-build.87+sha.0f37e49"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.87+sha.0f37e49">v1.2.17-build.87+sha.0f37e49</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.86+sha.3fdcde7/angular-mocks.js"
                 data-name="v1.2.17-build.86+sha.3fdcde7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.86+sha.3fdcde7">v1.2.17-build.86+sha.3fdcde7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.85+sha.d2dc771/angular-mocks.js"
                 data-name="v1.2.17-build.85+sha.d2dc771"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.85+sha.d2dc771">v1.2.17-build.85+sha.d2dc771</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17-build.84+sha.d99b506/angular-mocks.js"
                 data-name="v1.2.17-build.84+sha.d99b506"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17-build.84+sha.d99b506">v1.2.17-build.84+sha.d99b506</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.17/angular-mocks.js"
                 data-name="v1.2.17"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17">v1.2.17</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.83+sha.fef0cfc/angular-mocks.js"
                 data-name="v1.2.16-build.83+sha.fef0cfc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.83+sha.fef0cfc">v1.2.16-build.83+sha.fef0cfc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.82+sha.5de8455/angular-mocks.js"
                 data-name="v1.2.16-build.82+sha.5de8455"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.82+sha.5de8455">v1.2.16-build.82+sha.5de8455</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.81+sha.38ea542/angular-mocks.js"
                 data-name="v1.2.16-build.81+sha.38ea542"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.81+sha.38ea542">v1.2.16-build.81+sha.38ea542</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.80+sha.2db66f5/angular-mocks.js"
                 data-name="v1.2.16-build.80+sha.2db66f5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.80+sha.2db66f5">v1.2.16-build.80+sha.2db66f5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.79+sha.55fe6d6/angular-mocks.js"
                 data-name="v1.2.16-build.79+sha.55fe6d6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.79+sha.55fe6d6">v1.2.16-build.79+sha.55fe6d6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.78+sha.f4c08fe/angular-mocks.js"
                 data-name="v1.2.16-build.78+sha.f4c08fe"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.78+sha.f4c08fe">v1.2.16-build.78+sha.f4c08fe</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.77+sha.71bc451/angular-mocks.js"
                 data-name="v1.2.16-build.77+sha.71bc451"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.77+sha.71bc451">v1.2.16-build.77+sha.71bc451</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.76+sha.7e4e696/angular-mocks.js"
                 data-name="v1.2.16-build.76+sha.7e4e696"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.76+sha.7e4e696">v1.2.16-build.76+sha.7e4e696</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.75+sha.6da44a4/angular-mocks.js"
                 data-name="v1.2.16-build.75+sha.6da44a4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.75+sha.6da44a4">v1.2.16-build.75+sha.6da44a4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.74+sha.a81195c/angular-mocks.js"
                 data-name="v1.2.16-build.74+sha.a81195c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.74+sha.a81195c">v1.2.16-build.74+sha.a81195c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.73+sha.102a320/angular-mocks.js"
                 data-name="v1.2.16-build.73+sha.102a320"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.73+sha.102a320">v1.2.16-build.73+sha.102a320</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.72+sha.293cb1f/angular-mocks.js"
                 data-name="v1.2.16-build.72+sha.293cb1f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.72+sha.293cb1f">v1.2.16-build.72+sha.293cb1f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.71+sha.81395ac/angular-mocks.js"
                 data-name="v1.2.16-build.71+sha.81395ac"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.71+sha.81395ac">v1.2.16-build.71+sha.81395ac</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.70+sha.6e420ff/angular-mocks.js"
                 data-name="v1.2.16-build.70+sha.6e420ff"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.70+sha.6e420ff">v1.2.16-build.70+sha.6e420ff</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.69+sha.5393814/angular-mocks.js"
                 data-name="v1.2.16-build.69+sha.5393814"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.69+sha.5393814">v1.2.16-build.69+sha.5393814</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.68+sha.fab59e7/angular-mocks.js"
                 data-name="v1.2.16-build.68+sha.fab59e7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.68+sha.fab59e7">v1.2.16-build.68+sha.fab59e7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.67+sha.553c252/angular-mocks.js"
                 data-name="v1.2.16-build.67+sha.553c252"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.67+sha.553c252">v1.2.16-build.67+sha.553c252</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.66+sha.e145a8d/angular-mocks.js"
                 data-name="v1.2.16-build.66+sha.e145a8d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.66+sha.e145a8d">v1.2.16-build.66+sha.e145a8d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.65+sha.b49d0cc/angular-mocks.js"
                 data-name="v1.2.16-build.65+sha.b49d0cc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.65+sha.b49d0cc">v1.2.16-build.65+sha.b49d0cc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.64+sha.245de33/angular-mocks.js"
                 data-name="v1.2.16-build.64+sha.245de33"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.64+sha.245de33">v1.2.16-build.64+sha.245de33</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.63+sha.8d4d437/angular-mocks.js"
                 data-name="v1.2.16-build.63+sha.8d4d437"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.63+sha.8d4d437">v1.2.16-build.63+sha.8d4d437</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.62+sha.7287dbf/angular-mocks.js"
                 data-name="v1.2.16-build.62+sha.7287dbf"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.62+sha.7287dbf">v1.2.16-build.62+sha.7287dbf</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.61+sha.8a59724/angular-mocks.js"
                 data-name="v1.2.16-build.61+sha.8a59724"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.61+sha.8a59724">v1.2.16-build.61+sha.8a59724</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.60+sha.8a59724/angular-mocks.js"
                 data-name="v1.2.16-build.60+sha.8a59724"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.60+sha.8a59724">v1.2.16-build.60+sha.8a59724</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.59+sha.35d635c/angular-mocks.js"
                 data-name="v1.2.16-build.59+sha.35d635c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.59+sha.35d635c">v1.2.16-build.59+sha.35d635c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.58+sha.db2a4c0/angular-mocks.js"
                 data-name="v1.2.16-build.58+sha.db2a4c0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.58+sha.db2a4c0">v1.2.16-build.58+sha.db2a4c0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.57+sha.0d62257/angular-mocks.js"
                 data-name="v1.2.16-build.57+sha.0d62257"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.57+sha.0d62257">v1.2.16-build.57+sha.0d62257</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.56+sha.f911b84/angular-mocks.js"
                 data-name="v1.2.16-build.56+sha.f911b84"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.56+sha.f911b84">v1.2.16-build.56+sha.f911b84</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.55+sha.32c09c1/angular-mocks.js"
                 data-name="v1.2.16-build.55+sha.32c09c1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.55+sha.32c09c1">v1.2.16-build.55+sha.32c09c1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.54+sha.2606437/angular-mocks.js"
                 data-name="v1.2.16-build.54+sha.2606437"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.54+sha.2606437">v1.2.16-build.54+sha.2606437</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.53+sha.7a29436/angular-mocks.js"
                 data-name="v1.2.16-build.53+sha.7a29436"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.53+sha.7a29436">v1.2.16-build.53+sha.7a29436</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.52+sha.fbab287/angular-mocks.js"
                 data-name="v1.2.16-build.52+sha.fbab287"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.52+sha.fbab287">v1.2.16-build.52+sha.fbab287</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.51+sha.69e5c36/angular-mocks.js"
                 data-name="v1.2.16-build.51+sha.69e5c36"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.51+sha.69e5c36">v1.2.16-build.51+sha.69e5c36</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.50+sha.c0ccbb7/angular-mocks.js"
                 data-name="v1.2.16-build.50+sha.c0ccbb7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.50+sha.c0ccbb7">v1.2.16-build.50+sha.c0ccbb7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.49+sha.2590030/angular-mocks.js"
                 data-name="v1.2.16-build.49+sha.2590030"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.49+sha.2590030">v1.2.16-build.49+sha.2590030</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.48+sha.fedc419/angular-mocks.js"
                 data-name="v1.2.16-build.48+sha.fedc419"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.48+sha.fedc419">v1.2.16-build.48+sha.fedc419</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.47+sha.0e5106e/angular-mocks.js"
                 data-name="v1.2.16-build.47+sha.0e5106e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.47+sha.0e5106e">v1.2.16-build.47+sha.0e5106e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.46+sha.9091b77/angular-mocks.js"
                 data-name="v1.2.16-build.46+sha.9091b77"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.46+sha.9091b77">v1.2.16-build.46+sha.9091b77</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.43+sha.95bd046/angular-mocks.js"
                 data-name="v1.2.16-build.43+sha.95bd046"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.43+sha.95bd046">v1.2.16-build.43+sha.95bd046</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.42+sha.5ced7b2/angular-mocks.js"
                 data-name="v1.2.16-build.42+sha.5ced7b2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.42+sha.5ced7b2">v1.2.16-build.42+sha.5ced7b2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.41+sha.114cf9e/angular-mocks.js"
                 data-name="v1.2.16-build.41+sha.114cf9e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.41+sha.114cf9e">v1.2.16-build.41+sha.114cf9e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.40+sha.1b61b73/angular-mocks.js"
                 data-name="v1.2.16-build.40+sha.1b61b73"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.40+sha.1b61b73">v1.2.16-build.40+sha.1b61b73</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.39+sha.77edce5/angular-mocks.js"
                 data-name="v1.2.16-build.39+sha.77edce5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.39+sha.77edce5">v1.2.16-build.39+sha.77edce5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.38+sha.2acc910/angular-mocks.js"
                 data-name="v1.2.16-build.38+sha.2acc910"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.38+sha.2acc910">v1.2.16-build.38+sha.2acc910</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.37+sha.5b1c899/angular-mocks.js"
                 data-name="v1.2.16-build.37+sha.5b1c899"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.37+sha.5b1c899">v1.2.16-build.37+sha.5b1c899</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.36+sha.b0bcf18/angular-mocks.js"
                 data-name="v1.2.16-build.36+sha.b0bcf18"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.36+sha.b0bcf18">v1.2.16-build.36+sha.b0bcf18</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.35+sha.764a3be/angular-mocks.js"
                 data-name="v1.2.16-build.35+sha.764a3be"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.35+sha.764a3be">v1.2.16-build.35+sha.764a3be</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.34+sha.561ddc9/angular-mocks.js"
                 data-name="v1.2.16-build.34+sha.561ddc9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.34+sha.561ddc9">v1.2.16-build.34+sha.561ddc9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.33+sha.512ecf8/angular-mocks.js"
                 data-name="v1.2.16-build.33+sha.512ecf8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.33+sha.512ecf8">v1.2.16-build.33+sha.512ecf8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.32+sha.6636f1d/angular-mocks.js"
                 data-name="v1.2.16-build.32+sha.6636f1d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.32+sha.6636f1d">v1.2.16-build.32+sha.6636f1d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.31+sha.7cccb8b/angular-mocks.js"
                 data-name="v1.2.16-build.31+sha.7cccb8b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.31+sha.7cccb8b">v1.2.16-build.31+sha.7cccb8b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.30+sha.7cccb8b/angular-mocks.js"
                 data-name="v1.2.16-build.30+sha.7cccb8b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.30+sha.7cccb8b">v1.2.16-build.30+sha.7cccb8b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.29+sha.a275d53/angular-mocks.js"
                 data-name="v1.2.16-build.29+sha.a275d53"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.29+sha.a275d53">v1.2.16-build.29+sha.a275d53</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.28+sha.b2363e3/angular-mocks.js"
                 data-name="v1.2.16-build.28+sha.b2363e3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.28+sha.b2363e3">v1.2.16-build.28+sha.b2363e3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.27+sha.edfca4c/angular-mocks.js"
                 data-name="v1.2.16-build.27+sha.edfca4c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16-build.27+sha.edfca4c">v1.2.16-build.27+sha.edfca4c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16/angular-mocks.js"
                 data-name="v1.2.16"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16">v1.2.16</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2399+sha.ca4ddfa/angular-mocks.js"
                 data-name="v1.2.15-build.2399+sha.ca4ddfa"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2399+sha.ca4ddfa">v1.2.15-build.2399+sha.ca4ddfa</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2398+sha.4bab3d8/angular-mocks.js"
                 data-name="v1.2.15-build.2398+sha.4bab3d8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2398+sha.4bab3d8">v1.2.15-build.2398+sha.4bab3d8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2397+sha.9c353b4/angular-mocks.js"
                 data-name="v1.2.15-build.2397+sha.9c353b4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2397+sha.9c353b4">v1.2.15-build.2397+sha.9c353b4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2396+sha.21243d6/angular-mocks.js"
                 data-name="v1.2.15-build.2396+sha.21243d6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2396+sha.21243d6">v1.2.15-build.2396+sha.21243d6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2395+sha.ad309b1/angular-mocks.js"
                 data-name="v1.2.15-build.2395+sha.ad309b1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2395+sha.ad309b1">v1.2.15-build.2395+sha.ad309b1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2394+sha.7a75356/angular-mocks.js"
                 data-name="v1.2.15-build.2394+sha.7a75356"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2394+sha.7a75356">v1.2.15-build.2394+sha.7a75356</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2393+sha.dc57fe9/angular-mocks.js"
                 data-name="v1.2.15-build.2393+sha.dc57fe9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2393+sha.dc57fe9">v1.2.15-build.2393+sha.dc57fe9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2392+sha.dc57fe9/angular-mocks.js"
                 data-name="v1.2.15-build.2392+sha.dc57fe9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2392+sha.dc57fe9">v1.2.15-build.2392+sha.dc57fe9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2391+sha.53ec5e1/angular-mocks.js"
                 data-name="v1.2.15-build.2391+sha.53ec5e1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2391+sha.53ec5e1">v1.2.15-build.2391+sha.53ec5e1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2390+sha.235731d/angular-mocks.js"
                 data-name="v1.2.15-build.2390+sha.235731d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2390+sha.235731d">v1.2.15-build.2390+sha.235731d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2389+sha.c5f2f58/angular-mocks.js"
                 data-name="v1.2.15-build.2389+sha.c5f2f58"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2389+sha.c5f2f58">v1.2.15-build.2389+sha.c5f2f58</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2388+sha.186a68f/angular-mocks.js"
                 data-name="v1.2.15-build.2388+sha.186a68f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2388+sha.186a68f">v1.2.15-build.2388+sha.186a68f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2387+sha.46bd6dc/angular-mocks.js"
                 data-name="v1.2.15-build.2387+sha.46bd6dc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2387+sha.46bd6dc">v1.2.15-build.2387+sha.46bd6dc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2386+sha.80451f5/angular-mocks.js"
                 data-name="v1.2.15-build.2386+sha.80451f5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2386+sha.80451f5">v1.2.15-build.2386+sha.80451f5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2385+sha.0609453/angular-mocks.js"
                 data-name="v1.2.15-build.2385+sha.0609453"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2385+sha.0609453">v1.2.15-build.2385+sha.0609453</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2384+sha.7682e57/angular-mocks.js"
                 data-name="v1.2.15-build.2384+sha.7682e57"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2384+sha.7682e57">v1.2.15-build.2384+sha.7682e57</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2378+sha.9335378/angular-mocks.js"
                 data-name="v1.2.15-build.2378+sha.9335378"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2378+sha.9335378">v1.2.15-build.2378+sha.9335378</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2377+sha.de2ecb8/angular-mocks.js"
                 data-name="v1.2.15-build.2377+sha.de2ecb8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2377+sha.de2ecb8">v1.2.15-build.2377+sha.de2ecb8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2376+sha.66fdc03/angular-mocks.js"
                 data-name="v1.2.15-build.2376+sha.66fdc03"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2376+sha.66fdc03">v1.2.15-build.2376+sha.66fdc03</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2375+sha.66fdc03/angular-mocks.js"
                 data-name="v1.2.15-build.2375+sha.66fdc03"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2375+sha.66fdc03">v1.2.15-build.2375+sha.66fdc03</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2374+sha.8e2e9ad/angular-mocks.js"
                 data-name="v1.2.15-build.2374+sha.8e2e9ad"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2374+sha.8e2e9ad">v1.2.15-build.2374+sha.8e2e9ad</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2373+sha.7d60497/angular-mocks.js"
                 data-name="v1.2.15-build.2373+sha.7d60497"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2373+sha.7d60497">v1.2.15-build.2373+sha.7d60497</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2372+sha.02075dc/angular-mocks.js"
                 data-name="v1.2.15-build.2372+sha.02075dc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2372+sha.02075dc">v1.2.15-build.2372+sha.02075dc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2371+sha.7c73bc9/angular-mocks.js"
                 data-name="v1.2.15-build.2371+sha.7c73bc9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2371+sha.7c73bc9">v1.2.15-build.2371+sha.7c73bc9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2370+sha.2036fb1/angular-mocks.js"
                 data-name="v1.2.15-build.2370+sha.2036fb1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2370+sha.2036fb1">v1.2.15-build.2370+sha.2036fb1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2369+sha.d07101d/angular-mocks.js"
                 data-name="v1.2.15-build.2369+sha.d07101d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2369+sha.d07101d">v1.2.15-build.2369+sha.d07101d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2368+sha.d07101d/angular-mocks.js"
                 data-name="v1.2.15-build.2368+sha.d07101d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2368+sha.d07101d">v1.2.15-build.2368+sha.d07101d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2365+sha.d07101d/angular-mocks.js"
                 data-name="v1.2.15-build.2365+sha.d07101d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2365+sha.d07101d">v1.2.15-build.2365+sha.d07101d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2364+sha.7c34e1f/angular-mocks.js"
                 data-name="v1.2.15-build.2364+sha.7c34e1f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2364+sha.7c34e1f">v1.2.15-build.2364+sha.7c34e1f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2363+sha.bf82c8a/angular-mocks.js"
                 data-name="v1.2.15-build.2363+sha.bf82c8a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2363+sha.bf82c8a">v1.2.15-build.2363+sha.bf82c8a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2362+sha.d5f2084/angular-mocks.js"
                 data-name="v1.2.15-build.2362+sha.d5f2084"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2362+sha.d5f2084">v1.2.15-build.2362+sha.d5f2084</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2361+sha.9bffccd/angular-mocks.js"
                 data-name="v1.2.15-build.2361+sha.9bffccd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2361+sha.9bffccd">v1.2.15-build.2361+sha.9bffccd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2360+sha.6b18a56/angular-mocks.js"
                 data-name="v1.2.15-build.2360+sha.6b18a56"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2360+sha.6b18a56">v1.2.15-build.2360+sha.6b18a56</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2359+sha.27b7fa3/angular-mocks.js"
                 data-name="v1.2.15-build.2359+sha.27b7fa3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2359+sha.27b7fa3">v1.2.15-build.2359+sha.27b7fa3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2358+sha.d7ecab7/angular-mocks.js"
                 data-name="v1.2.15-build.2358+sha.d7ecab7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2358+sha.d7ecab7">v1.2.15-build.2358+sha.d7ecab7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2357+sha.2616907/angular-mocks.js"
                 data-name="v1.2.15-build.2357+sha.2616907"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.2357+sha.2616907">v1.2.15-build.2357+sha.2616907</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.26+sha.a9b5a10/angular-mocks.js"
                 data-name="v1.2.15-build.26+sha.a9b5a10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.26+sha.a9b5a10">v1.2.15-build.26+sha.a9b5a10</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.25+sha.ad128e0/angular-mocks.js"
                 data-name="v1.2.15-build.25+sha.ad128e0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.25+sha.ad128e0">v1.2.15-build.25+sha.ad128e0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.24+sha.dc5ada4/angular-mocks.js"
                 data-name="v1.2.15-build.24+sha.dc5ada4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.24+sha.dc5ada4">v1.2.15-build.24+sha.dc5ada4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.23+sha.86ab885/angular-mocks.js"
                 data-name="v1.2.15-build.23+sha.86ab885"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.23+sha.86ab885">v1.2.15-build.23+sha.86ab885</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.22+sha.320f6d1/angular-mocks.js"
                 data-name="v1.2.15-build.22+sha.320f6d1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.22+sha.320f6d1">v1.2.15-build.22+sha.320f6d1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.21+sha.83f37d7/angular-mocks.js"
                 data-name="v1.2.15-build.21+sha.83f37d7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.21+sha.83f37d7">v1.2.15-build.21+sha.83f37d7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.20+sha.d4ac254/angular-mocks.js"
                 data-name="v1.2.15-build.20+sha.d4ac254"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15-build.20+sha.d4ac254">v1.2.15-build.20+sha.d4ac254</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15/angular-mocks.js"
                 data-name="v1.2.15"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15">v1.2.15</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2348+sha.0d034a9/angular-mocks.js"
                 data-name="v1.2.14-build.2348+sha.0d034a9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2348+sha.0d034a9">v1.2.14-build.2348+sha.0d034a9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2347+sha.0c8a88b/angular-mocks.js"
                 data-name="v1.2.14-build.2347+sha.0c8a88b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2347+sha.0c8a88b">v1.2.14-build.2347+sha.0c8a88b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2346+sha.6b5baad/angular-mocks.js"
                 data-name="v1.2.14-build.2346+sha.6b5baad"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2346+sha.6b5baad">v1.2.14-build.2346+sha.6b5baad</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2345+sha.9aab5bf/angular-mocks.js"
                 data-name="v1.2.14-build.2345+sha.9aab5bf"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2345+sha.9aab5bf">v1.2.14-build.2345+sha.9aab5bf</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2344+sha.18c41af/angular-mocks.js"
                 data-name="v1.2.14-build.2344+sha.18c41af"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2344+sha.18c41af">v1.2.14-build.2344+sha.18c41af</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2343+sha.3344396/angular-mocks.js"
                 data-name="v1.2.14-build.2343+sha.3344396"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2343+sha.3344396">v1.2.14-build.2343+sha.3344396</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2342+sha.8794a17/angular-mocks.js"
                 data-name="v1.2.14-build.2342+sha.8794a17"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2342+sha.8794a17">v1.2.14-build.2342+sha.8794a17</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2341+sha.41e648a/angular-mocks.js"
                 data-name="v1.2.14-build.2341+sha.41e648a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2341+sha.41e648a">v1.2.14-build.2341+sha.41e648a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2340+sha.5d9d6a5/angular-mocks.js"
                 data-name="v1.2.14-build.2340+sha.5d9d6a5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2340+sha.5d9d6a5">v1.2.14-build.2340+sha.5d9d6a5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2339+sha.4e73c80/angular-mocks.js"
                 data-name="v1.2.14-build.2339+sha.4e73c80"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2339+sha.4e73c80">v1.2.14-build.2339+sha.4e73c80</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2338+sha.27873ac/angular-mocks.js"
                 data-name="v1.2.14-build.2338+sha.27873ac"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2338+sha.27873ac">v1.2.14-build.2338+sha.27873ac</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2337+sha.214c65d/angular-mocks.js"
                 data-name="v1.2.14-build.2337+sha.214c65d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2337+sha.214c65d">v1.2.14-build.2337+sha.214c65d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2336+sha.b3750e5/angular-mocks.js"
                 data-name="v1.2.14-build.2336+sha.b3750e5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2336+sha.b3750e5">v1.2.14-build.2336+sha.b3750e5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2335+sha.4aac37e/angular-mocks.js"
                 data-name="v1.2.14-build.2335+sha.4aac37e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2335+sha.4aac37e">v1.2.14-build.2335+sha.4aac37e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2334+sha.fd09586/angular-mocks.js"
                 data-name="v1.2.14-build.2334+sha.fd09586"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2334+sha.fd09586">v1.2.14-build.2334+sha.fd09586</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2333+sha.713f975/angular-mocks.js"
                 data-name="v1.2.14-build.2333+sha.713f975"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2333+sha.713f975">v1.2.14-build.2333+sha.713f975</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2332+sha.794e5e6/angular-mocks.js"
                 data-name="v1.2.14-build.2332+sha.794e5e6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2332+sha.794e5e6">v1.2.14-build.2332+sha.794e5e6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2331+sha.f4f1f43/angular-mocks.js"
                 data-name="v1.2.14-build.2331+sha.f4f1f43"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2331+sha.f4f1f43">v1.2.14-build.2331+sha.f4f1f43</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2330+sha.e71e7b6/angular-mocks.js"
                 data-name="v1.2.14-build.2330+sha.e71e7b6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2330+sha.e71e7b6">v1.2.14-build.2330+sha.e71e7b6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2329+sha.c914cd9/angular-mocks.js"
                 data-name="v1.2.14-build.2329+sha.c914cd9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2329+sha.c914cd9">v1.2.14-build.2329+sha.c914cd9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2328+sha.e988199/angular-mocks.js"
                 data-name="v1.2.14-build.2328+sha.e988199"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2328+sha.e988199">v1.2.14-build.2328+sha.e988199</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2327+sha.c9245cf/angular-mocks.js"
                 data-name="v1.2.14-build.2327+sha.c9245cf"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2327+sha.c9245cf">v1.2.14-build.2327+sha.c9245cf</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2326+sha.332e935/angular-mocks.js"
                 data-name="v1.2.14-build.2326+sha.332e935"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2326+sha.332e935">v1.2.14-build.2326+sha.332e935</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2325+sha.3d6dff4/angular-mocks.js"
                 data-name="v1.2.14-build.2325+sha.3d6dff4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2325+sha.3d6dff4">v1.2.14-build.2325+sha.3d6dff4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2324+sha.6b049c7/angular-mocks.js"
                 data-name="v1.2.14-build.2324+sha.6b049c7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2324+sha.6b049c7">v1.2.14-build.2324+sha.6b049c7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2323+sha.c99dd22/angular-mocks.js"
                 data-name="v1.2.14-build.2323+sha.c99dd22"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2323+sha.c99dd22">v1.2.14-build.2323+sha.c99dd22</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2322+sha.1b1413a/angular-mocks.js"
                 data-name="v1.2.14-build.2322+sha.1b1413a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2322+sha.1b1413a">v1.2.14-build.2322+sha.1b1413a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2320+sha.1b1413a/angular-mocks.js"
                 data-name="v1.2.14-build.2320+sha.1b1413a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2320+sha.1b1413a">v1.2.14-build.2320+sha.1b1413a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2319+sha.4c4537e/angular-mocks.js"
                 data-name="v1.2.14-build.2319+sha.4c4537e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2319+sha.4c4537e">v1.2.14-build.2319+sha.4c4537e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2318+sha.2cd87db/angular-mocks.js"
                 data-name="v1.2.14-build.2318+sha.2cd87db"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2318+sha.2cd87db">v1.2.14-build.2318+sha.2cd87db</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2317+sha.348a771/angular-mocks.js"
                 data-name="v1.2.14-build.2317+sha.348a771"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2317+sha.348a771">v1.2.14-build.2317+sha.348a771</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2316+sha.24fe163/angular-mocks.js"
                 data-name="v1.2.14-build.2316+sha.24fe163"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2316+sha.24fe163">v1.2.14-build.2316+sha.24fe163</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2315+sha.832be41/angular-mocks.js"
                 data-name="v1.2.14-build.2315+sha.832be41"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2315+sha.832be41">v1.2.14-build.2315+sha.832be41</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2314+sha.ffe5115/angular-mocks.js"
                 data-name="v1.2.14-build.2314+sha.ffe5115"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2314+sha.ffe5115">v1.2.14-build.2314+sha.ffe5115</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2313+sha.61b2515/angular-mocks.js"
                 data-name="v1.2.14-build.2313+sha.61b2515"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2313+sha.61b2515">v1.2.14-build.2313+sha.61b2515</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2312+sha.f296e2e/angular-mocks.js"
                 data-name="v1.2.14-build.2312+sha.f296e2e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2312+sha.f296e2e">v1.2.14-build.2312+sha.f296e2e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2311+sha.f4a121f/angular-mocks.js"
                 data-name="v1.2.14-build.2311+sha.f4a121f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2311+sha.f4a121f">v1.2.14-build.2311+sha.f4a121f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2307+sha.1293cc8/angular-mocks.js"
                 data-name="v1.2.14-build.2307+sha.1293cc8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2307+sha.1293cc8">v1.2.14-build.2307+sha.1293cc8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2306+sha.c2d447e/angular-mocks.js"
                 data-name="v1.2.14-build.2306+sha.c2d447e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2306+sha.c2d447e">v1.2.14-build.2306+sha.c2d447e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2305+sha.c8e03e3/angular-mocks.js"
                 data-name="v1.2.14-build.2305+sha.c8e03e3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2305+sha.c8e03e3">v1.2.14-build.2305+sha.c8e03e3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2304+sha.2f45133/angular-mocks.js"
                 data-name="v1.2.14-build.2304+sha.2f45133"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2304+sha.2f45133">v1.2.14-build.2304+sha.2f45133</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2303+sha.0c9abc3/angular-mocks.js"
                 data-name="v1.2.14-build.2303+sha.0c9abc3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2303+sha.0c9abc3">v1.2.14-build.2303+sha.0c9abc3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2302+sha.f827d64/angular-mocks.js"
                 data-name="v1.2.14-build.2302+sha.f827d64"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2302+sha.f827d64">v1.2.14-build.2302+sha.f827d64</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2301+sha.4d7e1ce/angular-mocks.js"
                 data-name="v1.2.14-build.2301+sha.4d7e1ce"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2301+sha.4d7e1ce">v1.2.14-build.2301+sha.4d7e1ce</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2300+sha.58b01fa/angular-mocks.js"
                 data-name="v1.2.14-build.2300+sha.58b01fa"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2300+sha.58b01fa">v1.2.14-build.2300+sha.58b01fa</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2299+sha.84ad0a0/angular-mocks.js"
                 data-name="v1.2.14-build.2299+sha.84ad0a0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2299+sha.84ad0a0">v1.2.14-build.2299+sha.84ad0a0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2298+sha.2a37690/angular-mocks.js"
                 data-name="v1.2.14-build.2298+sha.2a37690"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2298+sha.2a37690">v1.2.14-build.2298+sha.2a37690</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2297+sha.45304a9/angular-mocks.js"
                 data-name="v1.2.14-build.2297+sha.45304a9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2297+sha.45304a9">v1.2.14-build.2297+sha.45304a9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2296+sha.0478bb4/angular-mocks.js"
                 data-name="v1.2.14-build.2296+sha.0478bb4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2296+sha.0478bb4">v1.2.14-build.2296+sha.0478bb4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2295+sha.3193a3a/angular-mocks.js"
                 data-name="v1.2.14-build.2295+sha.3193a3a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2295+sha.3193a3a">v1.2.14-build.2295+sha.3193a3a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2294+sha.6082e2a/angular-mocks.js"
                 data-name="v1.2.14-build.2294+sha.6082e2a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2294+sha.6082e2a">v1.2.14-build.2294+sha.6082e2a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2293+sha.39bae62/angular-mocks.js"
                 data-name="v1.2.14-build.2293+sha.39bae62"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2293+sha.39bae62">v1.2.14-build.2293+sha.39bae62</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2292+sha.d7a73e4/angular-mocks.js"
                 data-name="v1.2.14-build.2292+sha.d7a73e4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2292+sha.d7a73e4">v1.2.14-build.2292+sha.d7a73e4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2291+sha.e6c35e1/angular-mocks.js"
                 data-name="v1.2.14-build.2291+sha.e6c35e1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2291+sha.e6c35e1">v1.2.14-build.2291+sha.e6c35e1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2290+sha.0b6ba9c/angular-mocks.js"
                 data-name="v1.2.14-build.2290+sha.0b6ba9c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2290+sha.0b6ba9c">v1.2.14-build.2290+sha.0b6ba9c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2289+sha.cc1f753/angular-mocks.js"
                 data-name="v1.2.14-build.2289+sha.cc1f753"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2289+sha.cc1f753">v1.2.14-build.2289+sha.cc1f753</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2288+sha.9ca685b/angular-mocks.js"
                 data-name="v1.2.14-build.2288+sha.9ca685b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2288+sha.9ca685b">v1.2.14-build.2288+sha.9ca685b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2287+sha.1b74e5e/angular-mocks.js"
                 data-name="v1.2.14-build.2287+sha.1b74e5e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2287+sha.1b74e5e">v1.2.14-build.2287+sha.1b74e5e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2286+sha.3fbc257/angular-mocks.js"
                 data-name="v1.2.14-build.2286+sha.3fbc257"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2286+sha.3fbc257">v1.2.14-build.2286+sha.3fbc257</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2285+sha.b488bbf/angular-mocks.js"
                 data-name="v1.2.14-build.2285+sha.b488bbf"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2285+sha.b488bbf">v1.2.14-build.2285+sha.b488bbf</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2284+sha.696928d/angular-mocks.js"
                 data-name="v1.2.14-build.2284+sha.696928d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2284+sha.696928d">v1.2.14-build.2284+sha.696928d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2283+sha.cbcfaa2/angular-mocks.js"
                 data-name="v1.2.14-build.2283+sha.cbcfaa2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2283+sha.cbcfaa2">v1.2.14-build.2283+sha.cbcfaa2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2282+sha.1523fc7/angular-mocks.js"
                 data-name="v1.2.14-build.2282+sha.1523fc7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2282+sha.1523fc7">v1.2.14-build.2282+sha.1523fc7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2281+sha.a3f7017/angular-mocks.js"
                 data-name="v1.2.14-build.2281+sha.a3f7017"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2281+sha.a3f7017">v1.2.14-build.2281+sha.a3f7017</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2280+sha.868a2c4/angular-mocks.js"
                 data-name="v1.2.14-build.2280+sha.868a2c4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2280+sha.868a2c4">v1.2.14-build.2280+sha.868a2c4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2278+sha.21dac2a/angular-mocks.js"
                 data-name="v1.2.14-build.2278+sha.21dac2a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2278+sha.21dac2a">v1.2.14-build.2278+sha.21dac2a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2277+sha.481508d/angular-mocks.js"
                 data-name="v1.2.14-build.2277+sha.481508d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2277+sha.481508d">v1.2.14-build.2277+sha.481508d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2276+sha.12e4d3a/angular-mocks.js"
                 data-name="v1.2.14-build.2276+sha.12e4d3a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2276+sha.12e4d3a">v1.2.14-build.2276+sha.12e4d3a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2275+sha.4f937bd/angular-mocks.js"
                 data-name="v1.2.14-build.2275+sha.4f937bd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2275+sha.4f937bd">v1.2.14-build.2275+sha.4f937bd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2273+sha.666137d/angular-mocks.js"
                 data-name="v1.2.14-build.2273+sha.666137d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2273+sha.666137d">v1.2.14-build.2273+sha.666137d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2272+sha.846ebb4/angular-mocks.js"
                 data-name="v1.2.14-build.2272+sha.846ebb4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2272+sha.846ebb4">v1.2.14-build.2272+sha.846ebb4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2271+sha.e23a6a3/angular-mocks.js"
                 data-name="v1.2.14-build.2271+sha.e23a6a3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2271+sha.e23a6a3">v1.2.14-build.2271+sha.e23a6a3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2270+sha.47ec6f5/angular-mocks.js"
                 data-name="v1.2.14-build.2270+sha.47ec6f5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2270+sha.47ec6f5">v1.2.14-build.2270+sha.47ec6f5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2269+sha.47ec6f5/angular-mocks.js"
                 data-name="v1.2.14-build.2269+sha.47ec6f5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2269+sha.47ec6f5">v1.2.14-build.2269+sha.47ec6f5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2268+sha.1fb47e0/angular-mocks.js"
                 data-name="v1.2.14-build.2268+sha.1fb47e0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2268+sha.1fb47e0">v1.2.14-build.2268+sha.1fb47e0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2267+sha.cceb455/angular-mocks.js"
                 data-name="v1.2.14-build.2267+sha.cceb455"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2267+sha.cceb455">v1.2.14-build.2267+sha.cceb455</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2266+sha.3018ff7/angular-mocks.js"
                 data-name="v1.2.14-build.2266+sha.3018ff7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14-build.2266+sha.3018ff7">v1.2.14-build.2266+sha.3018ff7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14/angular-mocks.js"
                 data-name="v1.2.14"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14">v1.2.14</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2265+sha.c086f83/angular-mocks.js"
                 data-name="v1.2.13-build.2265+sha.c086f83"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.13-build.2265+sha.c086f83">v1.2.13-build.2265+sha.c086f83</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2263+sha.31c450b/angular-mocks.js"
                 data-name="v1.2.13-build.2263+sha.31c450b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.13-build.2263+sha.31c450b">v1.2.13-build.2263+sha.31c450b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2262+sha.a9fcb0d/angular-mocks.js"
                 data-name="v1.2.13-build.2262+sha.a9fcb0d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.13-build.2262+sha.a9fcb0d">v1.2.13-build.2262+sha.a9fcb0d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2261+sha.a3846ab/angular-mocks.js"
                 data-name="v1.2.13-build.2261+sha.a3846ab"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.13-build.2261+sha.a3846ab">v1.2.13-build.2261+sha.a3846ab</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2260+sha.2b73027/angular-mocks.js"
                 data-name="v1.2.13-build.2260+sha.2b73027"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.13-build.2260+sha.2b73027">v1.2.13-build.2260+sha.2b73027</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2259+sha.1079105/angular-mocks.js"
                 data-name="v1.2.13-build.2259+sha.1079105"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.13-build.2259+sha.1079105">v1.2.13-build.2259+sha.1079105</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2258+sha.d119e36/angular-mocks.js"
                 data-name="v1.2.13-build.2258+sha.d119e36"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.13-build.2258+sha.d119e36">v1.2.13-build.2258+sha.d119e36</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2257+sha.98b2f8e/angular-mocks.js"
                 data-name="v1.2.13-build.2257+sha.98b2f8e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.13-build.2257+sha.98b2f8e">v1.2.13-build.2257+sha.98b2f8e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2256+sha.e7ab857/angular-mocks.js"
                 data-name="v1.2.13-build.2256+sha.e7ab857"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.13-build.2256+sha.e7ab857">v1.2.13-build.2256+sha.e7ab857</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2255+sha.72894f0/angular-mocks.js"
                 data-name="v1.2.13-build.2255+sha.72894f0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.13-build.2255+sha.72894f0">v1.2.13-build.2255+sha.72894f0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2254+sha.760f49d/angular-mocks.js"
                 data-name="v1.2.13-build.2254+sha.760f49d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.13-build.2254+sha.760f49d">v1.2.13-build.2254+sha.760f49d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2253+sha.686b13b/angular-mocks.js"
                 data-name="v1.2.13-build.2253+sha.686b13b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.13-build.2253+sha.686b13b">v1.2.13-build.2253+sha.686b13b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2252+sha.56cc7bc/angular-mocks.js"
                 data-name="v1.2.13-build.2252+sha.56cc7bc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.13-build.2252+sha.56cc7bc">v1.2.13-build.2252+sha.56cc7bc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2251+sha.b4eed8a/angular-mocks.js"
                 data-name="v1.2.13-build.2251+sha.b4eed8a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.13-build.2251+sha.b4eed8a">v1.2.13-build.2251+sha.b4eed8a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2250+sha.08793a6/angular-mocks.js"
                 data-name="v1.2.13-build.2250+sha.08793a6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.13-build.2250+sha.08793a6">v1.2.13-build.2250+sha.08793a6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2249+sha.ef4bf8c/angular-mocks.js"
                 data-name="v1.2.13-build.2249+sha.ef4bf8c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.13-build.2249+sha.ef4bf8c">v1.2.13-build.2249+sha.ef4bf8c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2248+sha.b6ab826/angular-mocks.js"
                 data-name="v1.2.13-build.2248+sha.b6ab826"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.13-build.2248+sha.b6ab826">v1.2.13-build.2248+sha.b6ab826</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2247+sha.a686244/angular-mocks.js"
                 data-name="v1.2.13-build.2247+sha.a686244"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.13-build.2247+sha.a686244">v1.2.13-build.2247+sha.a686244</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2246+sha.945fc1a/angular-mocks.js"
                 data-name="v1.2.13-build.2246+sha.945fc1a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.13-build.2246+sha.945fc1a">v1.2.13-build.2246+sha.945fc1a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2245+sha.f99fe79/angular-mocks.js"
                 data-name="v1.2.13-build.2245+sha.f99fe79"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.13-build.2245+sha.f99fe79">v1.2.13-build.2245+sha.f99fe79</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2244+sha.2dfbc08/angular-mocks.js"
                 data-name="v1.2.13-build.2244+sha.2dfbc08"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.13-build.2244+sha.2dfbc08">v1.2.13-build.2244+sha.2dfbc08</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2243+sha.27613fd/angular-mocks.js"
                 data-name="v1.2.13-build.2243+sha.27613fd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.13-build.2243+sha.27613fd">v1.2.13-build.2243+sha.27613fd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2242+sha.e645f7c/angular-mocks.js"
                 data-name="v1.2.13-build.2242+sha.e645f7c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.13-build.2242+sha.e645f7c">v1.2.13-build.2242+sha.e645f7c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2241+sha.600e621/angular-mocks.js"
                 data-name="v1.2.13-build.2241+sha.600e621"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.13-build.2241+sha.600e621">v1.2.13-build.2241+sha.600e621</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2240+sha.5218c7b/angular-mocks.js"
                 data-name="v1.2.13-build.2240+sha.5218c7b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.13-build.2240+sha.5218c7b">v1.2.13-build.2240+sha.5218c7b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13/angular-mocks.js"
                 data-name="v1.2.13"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.13">v1.2.13</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2237+sha.d5c7ef0/angular-mocks.js"
                 data-name="v1.2.12-build.2237+sha.d5c7ef0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.12-build.2237+sha.d5c7ef0">v1.2.12-build.2237+sha.d5c7ef0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2236+sha.84fd3a1/angular-mocks.js"
                 data-name="v1.2.12-build.2236+sha.84fd3a1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.12-build.2236+sha.84fd3a1">v1.2.12-build.2236+sha.84fd3a1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2235+sha.fcf4393/angular-mocks.js"
                 data-name="v1.2.12-build.2235+sha.fcf4393"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.12-build.2235+sha.fcf4393">v1.2.12-build.2235+sha.fcf4393</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2233+sha.16301be/angular-mocks.js"
                 data-name="v1.2.12-build.2233+sha.16301be"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.12-build.2233+sha.16301be">v1.2.12-build.2233+sha.16301be</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2232+sha.95be253/angular-mocks.js"
                 data-name="v1.2.12-build.2232+sha.95be253"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.12-build.2232+sha.95be253">v1.2.12-build.2232+sha.95be253</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2230+sha.bf4b0db/angular-mocks.js"
                 data-name="v1.2.12-build.2230+sha.bf4b0db"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.12-build.2230+sha.bf4b0db">v1.2.12-build.2230+sha.bf4b0db</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2229+sha.95d119e/angular-mocks.js"
                 data-name="v1.2.12-build.2229+sha.95d119e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.12-build.2229+sha.95d119e">v1.2.12-build.2229+sha.95d119e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2226+sha.a8c1d9c/angular-mocks.js"
                 data-name="v1.2.12-build.2226+sha.a8c1d9c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.12-build.2226+sha.a8c1d9c">v1.2.12-build.2226+sha.a8c1d9c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2225+sha.8829a2a/angular-mocks.js"
                 data-name="v1.2.12-build.2225+sha.8829a2a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.12-build.2225+sha.8829a2a">v1.2.12-build.2225+sha.8829a2a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2223+sha.95522cc/angular-mocks.js"
                 data-name="v1.2.12-build.2223+sha.95522cc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.12-build.2223+sha.95522cc">v1.2.12-build.2223+sha.95522cc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2222+sha.c5f69e3/angular-mocks.js"
                 data-name="v1.2.12-build.2222+sha.c5f69e3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.12-build.2222+sha.c5f69e3">v1.2.12-build.2222+sha.c5f69e3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2219+sha.058842a/angular-mocks.js"
                 data-name="v1.2.12-build.2219+sha.058842a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.12-build.2219+sha.058842a">v1.2.12-build.2219+sha.058842a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2217+sha.5850e61/angular-mocks.js"
                 data-name="v1.2.12-build.2217+sha.5850e61"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.12-build.2217+sha.5850e61">v1.2.12-build.2217+sha.5850e61</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2216+sha.5850e61/angular-mocks.js"
                 data-name="v1.2.12-build.2216+sha.5850e61"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.12-build.2216+sha.5850e61">v1.2.12-build.2216+sha.5850e61</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2215+sha.0da6cc9/angular-mocks.js"
                 data-name="v1.2.12-build.2215+sha.0da6cc9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.12-build.2215+sha.0da6cc9">v1.2.12-build.2215+sha.0da6cc9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2214+sha.0da6cc9/angular-mocks.js"
                 data-name="v1.2.12-build.2214+sha.0da6cc9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.12-build.2214+sha.0da6cc9">v1.2.12-build.2214+sha.0da6cc9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2213+sha.cc60ba1/angular-mocks.js"
                 data-name="v1.2.12-build.2213+sha.cc60ba1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.12-build.2213+sha.cc60ba1">v1.2.12-build.2213+sha.cc60ba1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2212+sha.64d58a5/angular-mocks.js"
                 data-name="v1.2.12-build.2212+sha.64d58a5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.12-build.2212+sha.64d58a5">v1.2.12-build.2212+sha.64d58a5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2211+sha.3bf4390/angular-mocks.js"
                 data-name="v1.2.12-build.2211+sha.3bf4390"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.12-build.2211+sha.3bf4390">v1.2.12-build.2211+sha.3bf4390</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2210+sha.e7ac7aa/angular-mocks.js"
                 data-name="v1.2.12-build.2210+sha.e7ac7aa"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.12-build.2210+sha.e7ac7aa">v1.2.12-build.2210+sha.e7ac7aa</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2209+sha.37781ed/angular-mocks.js"
                 data-name="v1.2.12-build.2209+sha.37781ed"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.12-build.2209+sha.37781ed">v1.2.12-build.2209+sha.37781ed</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2208+sha.19ba651/angular-mocks.js"
                 data-name="v1.2.12-build.2208+sha.19ba651"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.12-build.2208+sha.19ba651">v1.2.12-build.2208+sha.19ba651</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2207+sha.bc5ceee/angular-mocks.js"
                 data-name="v1.2.12-build.2207+sha.bc5ceee"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.12-build.2207+sha.bc5ceee">v1.2.12-build.2207+sha.bc5ceee</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2206+sha.106af49/angular-mocks.js"
                 data-name="v1.2.12-build.2206+sha.106af49"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.12-build.2206+sha.106af49">v1.2.12-build.2206+sha.106af49</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12/angular-mocks.js"
                 data-name="v1.2.12"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.12">v1.2.12</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2205+sha.ce1f1f9/angular-mocks.js"
                 data-name="v1.2.11-build.2205+sha.ce1f1f9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.11-build.2205+sha.ce1f1f9">v1.2.11-build.2205+sha.ce1f1f9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2204+sha.8205158/angular-mocks.js"
                 data-name="v1.2.11-build.2204+sha.8205158"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.11-build.2204+sha.8205158">v1.2.11-build.2204+sha.8205158</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2203+sha.8205158/angular-mocks.js"
                 data-name="v1.2.11-build.2203+sha.8205158"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.11-build.2203+sha.8205158">v1.2.11-build.2203+sha.8205158</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2202+sha.6609e3d/angular-mocks.js"
                 data-name="v1.2.11-build.2202+sha.6609e3d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.11-build.2202+sha.6609e3d">v1.2.11-build.2202+sha.6609e3d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2200+sha.fd61e22/angular-mocks.js"
                 data-name="v1.2.11-build.2200+sha.fd61e22"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.11-build.2200+sha.fd61e22">v1.2.11-build.2200+sha.fd61e22</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2199+sha.074b067/angular-mocks.js"
                 data-name="v1.2.11-build.2199+sha.074b067"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.11-build.2199+sha.074b067">v1.2.11-build.2199+sha.074b067</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2198+sha.5ed721b/angular-mocks.js"
                 data-name="v1.2.11-build.2198+sha.5ed721b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.11-build.2198+sha.5ed721b">v1.2.11-build.2198+sha.5ed721b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2197+sha.c22ab5d/angular-mocks.js"
                 data-name="v1.2.11-build.2197+sha.c22ab5d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.11-build.2197+sha.c22ab5d">v1.2.11-build.2197+sha.c22ab5d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2196+sha.339a165/angular-mocks.js"
                 data-name="v1.2.11-build.2196+sha.339a165"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.11-build.2196+sha.339a165">v1.2.11-build.2196+sha.339a165</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2195+sha.29432ff/angular-mocks.js"
                 data-name="v1.2.11-build.2195+sha.29432ff"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.11-build.2195+sha.29432ff">v1.2.11-build.2195+sha.29432ff</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2194+sha.caed2df/angular-mocks.js"
                 data-name="v1.2.11-build.2194+sha.caed2df"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.11-build.2194+sha.caed2df">v1.2.11-build.2194+sha.caed2df</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2193+sha.7f4edaf/angular-mocks.js"
                 data-name="v1.2.11-build.2193+sha.7f4edaf"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.11-build.2193+sha.7f4edaf">v1.2.11-build.2193+sha.7f4edaf</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2192+sha.e2173f9/angular-mocks.js"
                 data-name="v1.2.11-build.2192+sha.e2173f9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.11-build.2192+sha.e2173f9">v1.2.11-build.2192+sha.e2173f9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2191+sha.7a78aed/angular-mocks.js"
                 data-name="v1.2.11-build.2191+sha.7a78aed"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.11-build.2191+sha.7a78aed">v1.2.11-build.2191+sha.7a78aed</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2190+sha.7aef2d5/angular-mocks.js"
                 data-name="v1.2.11-build.2190+sha.7aef2d5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.11-build.2190+sha.7aef2d5">v1.2.11-build.2190+sha.7aef2d5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2189+sha.95f0bf9/angular-mocks.js"
                 data-name="v1.2.11-build.2189+sha.95f0bf9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.11-build.2189+sha.95f0bf9">v1.2.11-build.2189+sha.95f0bf9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2188+sha.8a0be35/angular-mocks.js"
                 data-name="v1.2.11-build.2188+sha.8a0be35"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.11-build.2188+sha.8a0be35">v1.2.11-build.2188+sha.8a0be35</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2187+sha.f54f0f9/angular-mocks.js"
                 data-name="v1.2.11-build.2187+sha.f54f0f9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.11-build.2187+sha.f54f0f9">v1.2.11-build.2187+sha.f54f0f9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2186+sha.766b3d5/angular-mocks.js"
                 data-name="v1.2.11-build.2186+sha.766b3d5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.11-build.2186+sha.766b3d5">v1.2.11-build.2186+sha.766b3d5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2185+sha.4f735b0/angular-mocks.js"
                 data-name="v1.2.11-build.2185+sha.4f735b0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.11-build.2185+sha.4f735b0">v1.2.11-build.2185+sha.4f735b0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2184+sha.319dd1a/angular-mocks.js"
                 data-name="v1.2.11-build.2184+sha.319dd1a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.11-build.2184+sha.319dd1a">v1.2.11-build.2184+sha.319dd1a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2182+sha.88a14b4/angular-mocks.js"
                 data-name="v1.2.11-build.2182+sha.88a14b4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.11-build.2182+sha.88a14b4">v1.2.11-build.2182+sha.88a14b4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11/angular-mocks.js"
                 data-name="v1.2.11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.11">v1.2.11</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2181+sha.4f827f5/angular-mocks.js"
                 data-name="v1.2.10-build.2181+sha.4f827f5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2181+sha.4f827f5">v1.2.10-build.2181+sha.4f827f5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2180+sha.131410b/angular-mocks.js"
                 data-name="v1.2.10-build.2180+sha.131410b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2180+sha.131410b">v1.2.10-build.2180+sha.131410b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2179+sha.ca6b7d0/angular-mocks.js"
                 data-name="v1.2.10-build.2179+sha.ca6b7d0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2179+sha.ca6b7d0">v1.2.10-build.2179+sha.ca6b7d0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2178+sha.40dc806/angular-mocks.js"
                 data-name="v1.2.10-build.2178+sha.40dc806"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2178+sha.40dc806">v1.2.10-build.2178+sha.40dc806</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2177+sha.5e9835b/angular-mocks.js"
                 data-name="v1.2.10-build.2177+sha.5e9835b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2177+sha.5e9835b">v1.2.10-build.2177+sha.5e9835b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2176+sha.e020916/angular-mocks.js"
                 data-name="v1.2.10-build.2176+sha.e020916"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2176+sha.e020916">v1.2.10-build.2176+sha.e020916</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2175+sha.c3b5e16/angular-mocks.js"
                 data-name="v1.2.10-build.2175+sha.c3b5e16"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2175+sha.c3b5e16">v1.2.10-build.2175+sha.c3b5e16</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2174+sha.486bdf2/angular-mocks.js"
                 data-name="v1.2.10-build.2174+sha.486bdf2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2174+sha.486bdf2">v1.2.10-build.2174+sha.486bdf2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2173+sha.82213ef/angular-mocks.js"
                 data-name="v1.2.10-build.2173+sha.82213ef"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2173+sha.82213ef">v1.2.10-build.2173+sha.82213ef</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2172+sha.ec59be6/angular-mocks.js"
                 data-name="v1.2.10-build.2172+sha.ec59be6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2172+sha.ec59be6">v1.2.10-build.2172+sha.ec59be6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2171+sha.79e519f/angular-mocks.js"
                 data-name="v1.2.10-build.2171+sha.79e519f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2171+sha.79e519f">v1.2.10-build.2171+sha.79e519f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2170+sha.7cf5544/angular-mocks.js"
                 data-name="v1.2.10-build.2170+sha.7cf5544"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2170+sha.7cf5544">v1.2.10-build.2170+sha.7cf5544</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2169+sha.7cf5544/angular-mocks.js"
                 data-name="v1.2.10-build.2169+sha.7cf5544"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2169+sha.7cf5544">v1.2.10-build.2169+sha.7cf5544</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2168+sha.310f129/angular-mocks.js"
                 data-name="v1.2.10-build.2168+sha.310f129"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2168+sha.310f129">v1.2.10-build.2168+sha.310f129</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2167+sha.6d525f0/angular-mocks.js"
                 data-name="v1.2.10-build.2167+sha.6d525f0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2167+sha.6d525f0">v1.2.10-build.2167+sha.6d525f0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2166+sha.5b9ff6c/angular-mocks.js"
                 data-name="v1.2.10-build.2166+sha.5b9ff6c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2166+sha.5b9ff6c">v1.2.10-build.2166+sha.5b9ff6c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2165+sha.2068d76/angular-mocks.js"
                 data-name="v1.2.10-build.2165+sha.2068d76"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2165+sha.2068d76">v1.2.10-build.2165+sha.2068d76</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2164+sha.8b395ff/angular-mocks.js"
                 data-name="v1.2.10-build.2164+sha.8b395ff"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2164+sha.8b395ff">v1.2.10-build.2164+sha.8b395ff</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2163+sha.6c9131e/angular-mocks.js"
                 data-name="v1.2.10-build.2163+sha.6c9131e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2163+sha.6c9131e">v1.2.10-build.2163+sha.6c9131e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2162+sha.99c5027/angular-mocks.js"
                 data-name="v1.2.10-build.2162+sha.99c5027"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2162+sha.99c5027">v1.2.10-build.2162+sha.99c5027</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2161+sha.90e60d2/angular-mocks.js"
                 data-name="v1.2.10-build.2161+sha.90e60d2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2161+sha.90e60d2">v1.2.10-build.2161+sha.90e60d2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2160+sha.928d000/angular-mocks.js"
                 data-name="v1.2.10-build.2160+sha.928d000"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2160+sha.928d000">v1.2.10-build.2160+sha.928d000</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2159+sha.190c4f9/angular-mocks.js"
                 data-name="v1.2.10-build.2159+sha.190c4f9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2159+sha.190c4f9">v1.2.10-build.2159+sha.190c4f9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2158+sha.42ec95e/angular-mocks.js"
                 data-name="v1.2.10-build.2158+sha.42ec95e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2158+sha.42ec95e">v1.2.10-build.2158+sha.42ec95e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2157+sha.42ec95e/angular-mocks.js"
                 data-name="v1.2.10-build.2157+sha.42ec95e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2157+sha.42ec95e">v1.2.10-build.2157+sha.42ec95e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2156+sha.1028cfa/angular-mocks.js"
                 data-name="v1.2.10-build.2156+sha.1028cfa"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2156+sha.1028cfa">v1.2.10-build.2156+sha.1028cfa</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2155+sha.756c52d/angular-mocks.js"
                 data-name="v1.2.10-build.2155+sha.756c52d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2155+sha.756c52d">v1.2.10-build.2155+sha.756c52d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2154+sha.c3e1a41/angular-mocks.js"
                 data-name="v1.2.10-build.2154+sha.c3e1a41"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2154+sha.c3e1a41">v1.2.10-build.2154+sha.c3e1a41</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2153+sha.8dd4f14/angular-mocks.js"
                 data-name="v1.2.10-build.2153+sha.8dd4f14"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2153+sha.8dd4f14">v1.2.10-build.2153+sha.8dd4f14</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2152+sha.7ba30fd/angular-mocks.js"
                 data-name="v1.2.10-build.2152+sha.7ba30fd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2152+sha.7ba30fd">v1.2.10-build.2152+sha.7ba30fd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2151+sha.5adea0b/angular-mocks.js"
                 data-name="v1.2.10-build.2151+sha.5adea0b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2151+sha.5adea0b">v1.2.10-build.2151+sha.5adea0b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2150+sha.2262ca6/angular-mocks.js"
                 data-name="v1.2.10-build.2150+sha.2262ca6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2150+sha.2262ca6">v1.2.10-build.2150+sha.2262ca6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2149+sha.cd74f74/angular-mocks.js"
                 data-name="v1.2.10-build.2149+sha.cd74f74"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2149+sha.cd74f74">v1.2.10-build.2149+sha.cd74f74</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2148+sha.fced1c0/angular-mocks.js"
                 data-name="v1.2.10-build.2148+sha.fced1c0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2148+sha.fced1c0">v1.2.10-build.2148+sha.fced1c0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2147+sha.1cdcddb/angular-mocks.js"
                 data-name="v1.2.10-build.2147+sha.1cdcddb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2147+sha.1cdcddb">v1.2.10-build.2147+sha.1cdcddb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2146+sha.0e4d7ca/angular-mocks.js"
                 data-name="v1.2.10-build.2146+sha.0e4d7ca"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2146+sha.0e4d7ca">v1.2.10-build.2146+sha.0e4d7ca</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2145+sha.6a9ccac/angular-mocks.js"
                 data-name="v1.2.10-build.2145+sha.6a9ccac"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2145+sha.6a9ccac">v1.2.10-build.2145+sha.6a9ccac</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2144+sha.6a9ccac/angular-mocks.js"
                 data-name="v1.2.10-build.2144+sha.6a9ccac"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2144+sha.6a9ccac">v1.2.10-build.2144+sha.6a9ccac</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2143+sha.6a9ccac/angular-mocks.js"
                 data-name="v1.2.10-build.2143+sha.6a9ccac"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2143+sha.6a9ccac">v1.2.10-build.2143+sha.6a9ccac</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2142+sha.e591ddc/angular-mocks.js"
                 data-name="v1.2.10-build.2142+sha.e591ddc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2142+sha.e591ddc">v1.2.10-build.2142+sha.e591ddc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2141+sha.cd0af8a/angular-mocks.js"
                 data-name="v1.2.10-build.2141+sha.cd0af8a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2141+sha.cd0af8a">v1.2.10-build.2141+sha.cd0af8a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2140+sha.51a7f9d/angular-mocks.js"
                 data-name="v1.2.10-build.2140+sha.51a7f9d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2140+sha.51a7f9d">v1.2.10-build.2140+sha.51a7f9d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2139+sha.61eb426/angular-mocks.js"
                 data-name="v1.2.10-build.2139+sha.61eb426"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2139+sha.61eb426">v1.2.10-build.2139+sha.61eb426</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2136+sha.8ea8da4/angular-mocks.js"
                 data-name="v1.2.10-build.2136+sha.8ea8da4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10-build.2136+sha.8ea8da4">v1.2.10-build.2136+sha.8ea8da4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10/angular-mocks.js"
                 data-name="v1.2.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10">v1.2.10</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2134+sha.1413328/angular-mocks.js"
                 data-name="v1.2.9-build.2134+sha.1413328"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.9-build.2134+sha.1413328">v1.2.9-build.2134+sha.1413328</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2133+sha.dde1b29/angular-mocks.js"
                 data-name="v1.2.9-build.2133+sha.dde1b29"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.9-build.2133+sha.dde1b29">v1.2.9-build.2133+sha.dde1b29</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2130+sha.02a4582/angular-mocks.js"
                 data-name="v1.2.9-build.2130+sha.02a4582"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.9-build.2130+sha.02a4582">v1.2.9-build.2130+sha.02a4582</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2129+sha.e324c14/angular-mocks.js"
                 data-name="v1.2.9-build.2129+sha.e324c14"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.9-build.2129+sha.e324c14">v1.2.9-build.2129+sha.e324c14</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2128+sha.e1cfb19/angular-mocks.js"
                 data-name="v1.2.9-build.2128+sha.e1cfb19"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.9-build.2128+sha.e1cfb19">v1.2.9-build.2128+sha.e1cfb19</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2127+sha.2a35863/angular-mocks.js"
                 data-name="v1.2.9-build.2127+sha.2a35863"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.9-build.2127+sha.2a35863">v1.2.9-build.2127+sha.2a35863</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2126+sha.834d316/angular-mocks.js"
                 data-name="v1.2.9-build.2126+sha.834d316"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.9-build.2126+sha.834d316">v1.2.9-build.2126+sha.834d316</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2125+sha.b3acdde/angular-mocks.js"
                 data-name="v1.2.9-build.2125+sha.b3acdde"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.9-build.2125+sha.b3acdde">v1.2.9-build.2125+sha.b3acdde</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2124+sha.3085987/angular-mocks.js"
                 data-name="v1.2.9-build.2124+sha.3085987"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.9-build.2124+sha.3085987">v1.2.9-build.2124+sha.3085987</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2123+sha.2cd09c9/angular-mocks.js"
                 data-name="v1.2.9-build.2123+sha.2cd09c9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.9-build.2123+sha.2cd09c9">v1.2.9-build.2123+sha.2cd09c9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2122+sha.34fee06/angular-mocks.js"
                 data-name="v1.2.9-build.2122+sha.34fee06"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.9-build.2122+sha.34fee06">v1.2.9-build.2122+sha.34fee06</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2121+sha.c7a46d4/angular-mocks.js"
                 data-name="v1.2.9-build.2121+sha.c7a46d4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.9-build.2121+sha.c7a46d4">v1.2.9-build.2121+sha.c7a46d4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2119+sha.c3ab915/angular-mocks.js"
                 data-name="v1.2.9-build.2119+sha.c3ab915"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.9-build.2119+sha.c3ab915">v1.2.9-build.2119+sha.c3ab915</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2118+sha.f4a4f42/angular-mocks.js"
                 data-name="v1.2.9-build.2118+sha.f4a4f42"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.9-build.2118+sha.f4a4f42">v1.2.9-build.2118+sha.f4a4f42</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2117+sha.b2c84cc/angular-mocks.js"
                 data-name="v1.2.9-build.2117+sha.b2c84cc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.9-build.2117+sha.b2c84cc">v1.2.9-build.2117+sha.b2c84cc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2116+sha.cde840f/angular-mocks.js"
                 data-name="v1.2.9-build.2116+sha.cde840f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.9-build.2116+sha.cde840f">v1.2.9-build.2116+sha.cde840f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2115+sha.63150d8/angular-mocks.js"
                 data-name="v1.2.9-build.2115+sha.63150d8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.9-build.2115+sha.63150d8">v1.2.9-build.2115+sha.63150d8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2114+sha.f9656da/angular-mocks.js"
                 data-name="v1.2.9-build.2114+sha.f9656da"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.9-build.2114+sha.f9656da">v1.2.9-build.2114+sha.f9656da</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2113+sha.a0d759c/angular-mocks.js"
                 data-name="v1.2.9-build.2113+sha.a0d759c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.9-build.2113+sha.a0d759c">v1.2.9-build.2113+sha.a0d759c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2112+sha.0d421f0/angular-mocks.js"
                 data-name="v1.2.9-build.2112+sha.0d421f0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.9-build.2112+sha.0d421f0">v1.2.9-build.2112+sha.0d421f0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2111+sha.5f937e5/angular-mocks.js"
                 data-name="v1.2.9-build.2111+sha.5f937e5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.9-build.2111+sha.5f937e5">v1.2.9-build.2111+sha.5f937e5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9/angular-mocks.js"
                 data-name="v1.2.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.9">v1.2.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2110+sha.ece7854/angular-mocks.js"
                 data-name="v1.2.8-build.2110+sha.ece7854"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2110+sha.ece7854">v1.2.8-build.2110+sha.ece7854</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2109+sha.8ace807/angular-mocks.js"
                 data-name="v1.2.8-build.2109+sha.8ace807"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2109+sha.8ace807">v1.2.8-build.2109+sha.8ace807</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2108+sha.a9cccbe/angular-mocks.js"
                 data-name="v1.2.8-build.2108+sha.a9cccbe"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2108+sha.a9cccbe">v1.2.8-build.2108+sha.a9cccbe</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2107+sha.36c9e42/angular-mocks.js"
                 data-name="v1.2.8-build.2107+sha.36c9e42"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2107+sha.36c9e42">v1.2.8-build.2107+sha.36c9e42</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2106+sha.9f566db/angular-mocks.js"
                 data-name="v1.2.8-build.2106+sha.9f566db"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2106+sha.9f566db">v1.2.8-build.2106+sha.9f566db</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2105+sha.c77b2bc/angular-mocks.js"
                 data-name="v1.2.8-build.2105+sha.c77b2bc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2105+sha.c77b2bc">v1.2.8-build.2105+sha.c77b2bc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2104+sha.5a4145f/angular-mocks.js"
                 data-name="v1.2.8-build.2104+sha.5a4145f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2104+sha.5a4145f">v1.2.8-build.2104+sha.5a4145f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2102+sha.5a9cb8b/angular-mocks.js"
                 data-name="v1.2.8-build.2102+sha.5a9cb8b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2102+sha.5a9cb8b">v1.2.8-build.2102+sha.5a9cb8b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2101+sha.69452fa/angular-mocks.js"
                 data-name="v1.2.8-build.2101+sha.69452fa"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2101+sha.69452fa">v1.2.8-build.2101+sha.69452fa</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2100+sha.1d2a388/angular-mocks.js"
                 data-name="v1.2.8-build.2100+sha.1d2a388"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2100+sha.1d2a388">v1.2.8-build.2100+sha.1d2a388</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2099+sha.ac05276/angular-mocks.js"
                 data-name="v1.2.8-build.2099+sha.ac05276"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2099+sha.ac05276">v1.2.8-build.2099+sha.ac05276</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2098+sha.cb9c0f2/angular-mocks.js"
                 data-name="v1.2.8-build.2098+sha.cb9c0f2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2098+sha.cb9c0f2">v1.2.8-build.2098+sha.cb9c0f2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2097+sha.b1d676b/angular-mocks.js"
                 data-name="v1.2.8-build.2097+sha.b1d676b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2097+sha.b1d676b">v1.2.8-build.2097+sha.b1d676b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2096+sha.9ddef84/angular-mocks.js"
                 data-name="v1.2.8-build.2096+sha.9ddef84"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2096+sha.9ddef84">v1.2.8-build.2096+sha.9ddef84</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2095+sha.28fc80b/angular-mocks.js"
                 data-name="v1.2.8-build.2095+sha.28fc80b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2095+sha.28fc80b">v1.2.8-build.2095+sha.28fc80b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2094+sha.b6c42d5/angular-mocks.js"
                 data-name="v1.2.8-build.2094+sha.b6c42d5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2094+sha.b6c42d5">v1.2.8-build.2094+sha.b6c42d5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2093+sha.1c045f1/angular-mocks.js"
                 data-name="v1.2.8-build.2093+sha.1c045f1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2093+sha.1c045f1">v1.2.8-build.2093+sha.1c045f1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2092+sha.95e1b2d/angular-mocks.js"
                 data-name="v1.2.8-build.2092+sha.95e1b2d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2092+sha.95e1b2d">v1.2.8-build.2092+sha.95e1b2d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2091+sha.75345e3/angular-mocks.js"
                 data-name="v1.2.8-build.2091+sha.75345e3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2091+sha.75345e3">v1.2.8-build.2091+sha.75345e3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2090+sha.e115342/angular-mocks.js"
                 data-name="v1.2.8-build.2090+sha.e115342"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2090+sha.e115342">v1.2.8-build.2090+sha.e115342</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2089+sha.e89150c/angular-mocks.js"
                 data-name="v1.2.8-build.2089+sha.e89150c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2089+sha.e89150c">v1.2.8-build.2089+sha.e89150c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2088+sha.9693a42/angular-mocks.js"
                 data-name="v1.2.8-build.2088+sha.9693a42"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2088+sha.9693a42">v1.2.8-build.2088+sha.9693a42</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2087+sha.affcbad/angular-mocks.js"
                 data-name="v1.2.8-build.2087+sha.affcbad"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2087+sha.affcbad">v1.2.8-build.2087+sha.affcbad</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2085+sha.1b0718b/angular-mocks.js"
                 data-name="v1.2.8-build.2085+sha.1b0718b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2085+sha.1b0718b">v1.2.8-build.2085+sha.1b0718b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2084+sha.53fd24f/angular-mocks.js"
                 data-name="v1.2.8-build.2084+sha.53fd24f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2084+sha.53fd24f">v1.2.8-build.2084+sha.53fd24f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2083+sha.28cfd96/angular-mocks.js"
                 data-name="v1.2.8-build.2083+sha.28cfd96"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2083+sha.28cfd96">v1.2.8-build.2083+sha.28cfd96</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2082+sha.99d5def/angular-mocks.js"
                 data-name="v1.2.8-build.2082+sha.99d5def"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2082+sha.99d5def">v1.2.8-build.2082+sha.99d5def</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2081+sha.efbc242/angular-mocks.js"
                 data-name="v1.2.8-build.2081+sha.efbc242"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2081+sha.efbc242">v1.2.8-build.2081+sha.efbc242</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2080+sha.d4d58f2/angular-mocks.js"
                 data-name="v1.2.8-build.2080+sha.d4d58f2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2080+sha.d4d58f2">v1.2.8-build.2080+sha.d4d58f2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2079+sha.dc89db3/angular-mocks.js"
                 data-name="v1.2.8-build.2079+sha.dc89db3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2079+sha.dc89db3">v1.2.8-build.2079+sha.dc89db3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2078+sha.5dc2795/angular-mocks.js"
                 data-name="v1.2.8-build.2078+sha.5dc2795"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2078+sha.5dc2795">v1.2.8-build.2078+sha.5dc2795</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2077+sha.4c21355/angular-mocks.js"
                 data-name="v1.2.8-build.2077+sha.4c21355"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2077+sha.4c21355">v1.2.8-build.2077+sha.4c21355</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2076+sha.6f6cb5c/angular-mocks.js"
                 data-name="v1.2.8-build.2076+sha.6f6cb5c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2076+sha.6f6cb5c">v1.2.8-build.2076+sha.6f6cb5c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2074+sha.821ed31/angular-mocks.js"
                 data-name="v1.2.8-build.2074+sha.821ed31"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2074+sha.821ed31">v1.2.8-build.2074+sha.821ed31</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2073+sha.a7aa4cc/angular-mocks.js"
                 data-name="v1.2.8-build.2073+sha.a7aa4cc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2073+sha.a7aa4cc">v1.2.8-build.2073+sha.a7aa4cc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2072+sha.e0ce9ed/angular-mocks.js"
                 data-name="v1.2.8-build.2072+sha.e0ce9ed"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2072+sha.e0ce9ed">v1.2.8-build.2072+sha.e0ce9ed</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2071+sha.caeb740/angular-mocks.js"
                 data-name="v1.2.8-build.2071+sha.caeb740"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2071+sha.caeb740">v1.2.8-build.2071+sha.caeb740</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2070+sha.1bb33cc/angular-mocks.js"
                 data-name="v1.2.8-build.2070+sha.1bb33cc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2070+sha.1bb33cc">v1.2.8-build.2070+sha.1bb33cc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2069+sha.1bb33cc/angular-mocks.js"
                 data-name="v1.2.8-build.2069+sha.1bb33cc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2069+sha.1bb33cc">v1.2.8-build.2069+sha.1bb33cc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2068+sha.d9ed9c5/angular-mocks.js"
                 data-name="v1.2.8-build.2068+sha.d9ed9c5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2068+sha.d9ed9c5">v1.2.8-build.2068+sha.d9ed9c5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2067+sha.00cac6e/angular-mocks.js"
                 data-name="v1.2.8-build.2067+sha.00cac6e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2067+sha.00cac6e">v1.2.8-build.2067+sha.00cac6e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2066+sha.2e9d7cc/angular-mocks.js"
                 data-name="v1.2.8-build.2066+sha.2e9d7cc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2066+sha.2e9d7cc">v1.2.8-build.2066+sha.2e9d7cc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2065+sha.32cc6cb/angular-mocks.js"
                 data-name="v1.2.8-build.2065+sha.32cc6cb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2065+sha.32cc6cb">v1.2.8-build.2065+sha.32cc6cb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2064+sha.3b1a4fe/angular-mocks.js"
                 data-name="v1.2.8-build.2064+sha.3b1a4fe"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2064+sha.3b1a4fe">v1.2.8-build.2064+sha.3b1a4fe</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2063+sha.9569778/angular-mocks.js"
                 data-name="v1.2.8-build.2063+sha.9569778"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2063+sha.9569778">v1.2.8-build.2063+sha.9569778</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2062+sha.0f61316/angular-mocks.js"
                 data-name="v1.2.8-build.2062+sha.0f61316"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2062+sha.0f61316">v1.2.8-build.2062+sha.0f61316</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2061+sha.86151b0/angular-mocks.js"
                 data-name="v1.2.8-build.2061+sha.86151b0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2061+sha.86151b0">v1.2.8-build.2061+sha.86151b0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2060+sha.1b7a6c6/angular-mocks.js"
                 data-name="v1.2.8-build.2060+sha.1b7a6c6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2060+sha.1b7a6c6">v1.2.8-build.2060+sha.1b7a6c6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2059+sha.0ef76dd/angular-mocks.js"
                 data-name="v1.2.8-build.2059+sha.0ef76dd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8-build.2059+sha.0ef76dd">v1.2.8-build.2059+sha.0ef76dd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8/angular-mocks.js"
                 data-name="v1.2.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8">v1.2.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2057+sha.3d38fff/angular-mocks.js"
                 data-name="v1.2.7-build.2057+sha.3d38fff"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.7-build.2057+sha.3d38fff">v1.2.7-build.2057+sha.3d38fff</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2045+sha.6a6f71f/angular-mocks.js"
                 data-name="v1.2.7-build.2045+sha.6a6f71f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.7-build.2045+sha.6a6f71f">v1.2.7-build.2045+sha.6a6f71f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2044+sha.cf68628/angular-mocks.js"
                 data-name="v1.2.7-build.2044+sha.cf68628"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.7-build.2044+sha.cf68628">v1.2.7-build.2044+sha.cf68628</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2043+sha.760f2fb/angular-mocks.js"
                 data-name="v1.2.7-build.2043+sha.760f2fb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.7-build.2043+sha.760f2fb">v1.2.7-build.2043+sha.760f2fb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2042+sha.c9705b7/angular-mocks.js"
                 data-name="v1.2.7-build.2042+sha.c9705b7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.7-build.2042+sha.c9705b7">v1.2.7-build.2042+sha.c9705b7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2041+sha.53ec33f/angular-mocks.js"
                 data-name="v1.2.7-build.2041+sha.53ec33f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.7-build.2041+sha.53ec33f">v1.2.7-build.2041+sha.53ec33f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2040+sha.884ef0d/angular-mocks.js"
                 data-name="v1.2.7-build.2040+sha.884ef0d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.7-build.2040+sha.884ef0d">v1.2.7-build.2040+sha.884ef0d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2039+sha.4f57236/angular-mocks.js"
                 data-name="v1.2.7-build.2039+sha.4f57236"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.7-build.2039+sha.4f57236">v1.2.7-build.2039+sha.4f57236</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2038+sha.50bf029/angular-mocks.js"
                 data-name="v1.2.7-build.2038+sha.50bf029"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.7-build.2038+sha.50bf029">v1.2.7-build.2038+sha.50bf029</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2036+sha.e415e91/angular-mocks.js"
                 data-name="v1.2.7-build.2036+sha.e415e91"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.7-build.2036+sha.e415e91">v1.2.7-build.2036+sha.e415e91</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2029+sha.80e7a45/angular-mocks.js"
                 data-name="v1.2.7-build.2029+sha.80e7a45"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.7-build.2029+sha.80e7a45">v1.2.7-build.2029+sha.80e7a45</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2028+sha.498365f/angular-mocks.js"
                 data-name="v1.2.7-build.2028+sha.498365f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.7-build.2028+sha.498365f">v1.2.7-build.2028+sha.498365f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2027+sha.056c849/angular-mocks.js"
                 data-name="v1.2.7-build.2027+sha.056c849"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.7-build.2027+sha.056c849">v1.2.7-build.2027+sha.056c849</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2026+sha.7d6e5a2/angular-mocks.js"
                 data-name="v1.2.7-build.2026+sha.7d6e5a2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.7-build.2026+sha.7d6e5a2">v1.2.7-build.2026+sha.7d6e5a2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2025+sha.d1c4766/angular-mocks.js"
                 data-name="v1.2.7-build.2025+sha.d1c4766"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.7-build.2025+sha.d1c4766">v1.2.7-build.2025+sha.d1c4766</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2024+sha.9847383/angular-mocks.js"
                 data-name="v1.2.7-build.2024+sha.9847383"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.7-build.2024+sha.9847383">v1.2.7-build.2024+sha.9847383</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2023+sha.870232b/angular-mocks.js"
                 data-name="v1.2.7-build.2023+sha.870232b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.7-build.2023+sha.870232b">v1.2.7-build.2023+sha.870232b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2022+sha.c31df32/angular-mocks.js"
                 data-name="v1.2.7-build.2022+sha.c31df32"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.7-build.2022+sha.c31df32">v1.2.7-build.2022+sha.c31df32</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2021+sha.df2b88e/angular-mocks.js"
                 data-name="v1.2.7-build.2021+sha.df2b88e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.7-build.2021+sha.df2b88e">v1.2.7-build.2021+sha.df2b88e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2020+sha.af7203e/angular-mocks.js"
                 data-name="v1.2.7-build.2020+sha.af7203e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.7-build.2020+sha.af7203e">v1.2.7-build.2020+sha.af7203e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7/angular-mocks.js"
                 data-name="v1.2.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.7">v1.2.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2018+sha.fe7decd/angular-mocks.js"
                 data-name="v1.2.6-build.2018+sha.fe7decd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6-build.2018+sha.fe7decd">v1.2.6-build.2018+sha.fe7decd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2017+sha.cef084a/angular-mocks.js"
                 data-name="v1.2.6-build.2017+sha.cef084a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6-build.2017+sha.cef084a">v1.2.6-build.2017+sha.cef084a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2016+sha.937caab/angular-mocks.js"
                 data-name="v1.2.6-build.2016+sha.937caab"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6-build.2016+sha.937caab">v1.2.6-build.2016+sha.937caab</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2015+sha.3fc8017/angular-mocks.js"
                 data-name="v1.2.6-build.2015+sha.3fc8017"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6-build.2015+sha.3fc8017">v1.2.6-build.2015+sha.3fc8017</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2014+sha.277a5ea/angular-mocks.js"
                 data-name="v1.2.6-build.2014+sha.277a5ea"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6-build.2014+sha.277a5ea">v1.2.6-build.2014+sha.277a5ea</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2013+sha.efba473/angular-mocks.js"
                 data-name="v1.2.6-build.2013+sha.efba473"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6-build.2013+sha.efba473">v1.2.6-build.2013+sha.efba473</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2012+sha.14d3e55/angular-mocks.js"
                 data-name="v1.2.6-build.2012+sha.14d3e55"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6-build.2012+sha.14d3e55">v1.2.6-build.2012+sha.14d3e55</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2011+sha.3d156a7/angular-mocks.js"
                 data-name="v1.2.6-build.2011+sha.3d156a7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6-build.2011+sha.3d156a7">v1.2.6-build.2011+sha.3d156a7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2010+sha.c7a1d1a/angular-mocks.js"
                 data-name="v1.2.6-build.2010+sha.c7a1d1a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6-build.2010+sha.c7a1d1a">v1.2.6-build.2010+sha.c7a1d1a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2009+sha.26d43ca/angular-mocks.js"
                 data-name="v1.2.6-build.2009+sha.26d43ca"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6-build.2009+sha.26d43ca">v1.2.6-build.2009+sha.26d43ca</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2008+sha.4f5758e/angular-mocks.js"
                 data-name="v1.2.6-build.2008+sha.4f5758e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6-build.2008+sha.4f5758e">v1.2.6-build.2008+sha.4f5758e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2007+sha.f0e3dfd/angular-mocks.js"
                 data-name="v1.2.6-build.2007+sha.f0e3dfd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6-build.2007+sha.f0e3dfd">v1.2.6-build.2007+sha.f0e3dfd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2006+sha.bc3ff2c/angular-mocks.js"
                 data-name="v1.2.6-build.2006+sha.bc3ff2c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6-build.2006+sha.bc3ff2c">v1.2.6-build.2006+sha.bc3ff2c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2005+sha.8f329ff/angular-mocks.js"
                 data-name="v1.2.6-build.2005+sha.8f329ff"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6-build.2005+sha.8f329ff">v1.2.6-build.2005+sha.8f329ff</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2004+sha.864b259/angular-mocks.js"
                 data-name="v1.2.6-build.2004+sha.864b259"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6-build.2004+sha.864b259">v1.2.6-build.2004+sha.864b259</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2003+sha.f3a796e/angular-mocks.js"
                 data-name="v1.2.6-build.2003+sha.f3a796e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6-build.2003+sha.f3a796e">v1.2.6-build.2003+sha.f3a796e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2002+sha.09f8962/angular-mocks.js"
                 data-name="v1.2.6-build.2002+sha.09f8962"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6-build.2002+sha.09f8962">v1.2.6-build.2002+sha.09f8962</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2001+sha.3dc1803/angular-mocks.js"
                 data-name="v1.2.6-build.2001+sha.3dc1803"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6-build.2001+sha.3dc1803">v1.2.6-build.2001+sha.3dc1803</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2000+sha.73c6671/angular-mocks.js"
                 data-name="v1.2.6-build.2000+sha.73c6671"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6-build.2000+sha.73c6671">v1.2.6-build.2000+sha.73c6671</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.1999+sha.cb29632/angular-mocks.js"
                 data-name="v1.2.6-build.1999+sha.cb29632"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6-build.1999+sha.cb29632">v1.2.6-build.1999+sha.cb29632</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.1998+sha.5c97731/angular-mocks.js"
                 data-name="v1.2.6-build.1998+sha.5c97731"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6-build.1998+sha.5c97731">v1.2.6-build.1998+sha.5c97731</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.1997+sha.b2e472e/angular-mocks.js"
                 data-name="v1.2.6-build.1997+sha.b2e472e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6-build.1997+sha.b2e472e">v1.2.6-build.1997+sha.b2e472e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.1996+sha.6ac773f/angular-mocks.js"
                 data-name="v1.2.6-build.1996+sha.6ac773f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6-build.1996+sha.6ac773f">v1.2.6-build.1996+sha.6ac773f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.1994+sha.4f72433/angular-mocks.js"
                 data-name="v1.2.6-build.1994+sha.4f72433"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6-build.1994+sha.4f72433">v1.2.6-build.1994+sha.4f72433</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.1993+sha.2f91cfd/angular-mocks.js"
                 data-name="v1.2.6-build.1993+sha.2f91cfd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6-build.1993+sha.2f91cfd">v1.2.6-build.1993+sha.2f91cfd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.1992+sha.d5c5e2b/angular-mocks.js"
                 data-name="v1.2.6-build.1992+sha.d5c5e2b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6-build.1992+sha.d5c5e2b">v1.2.6-build.1992+sha.d5c5e2b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.1991+sha.cbb3ce2/angular-mocks.js"
                 data-name="v1.2.6-build.1991+sha.cbb3ce2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6-build.1991+sha.cbb3ce2">v1.2.6-build.1991+sha.cbb3ce2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.1990+sha.45af02d/angular-mocks.js"
                 data-name="v1.2.6-build.1990+sha.45af02d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6-build.1990+sha.45af02d">v1.2.6-build.1990+sha.45af02d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.1989+sha.b0474cb/angular-mocks.js"
                 data-name="v1.2.6-build.1989+sha.b0474cb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6-build.1989+sha.b0474cb">v1.2.6-build.1989+sha.b0474cb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.1988+sha.b0474cb/angular-mocks.js"
                 data-name="v1.2.6-build.1988+sha.b0474cb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6-build.1988+sha.b0474cb">v1.2.6-build.1988+sha.b0474cb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6/angular-mocks.js"
                 data-name="v1.2.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6">v1.2.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.5/angular-mocks.js"
                 data-name="v1.2.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.5">v1.2.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.4/angular-mocks.js"
                 data-name="v1.2.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.4">v1.2.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.3/angular-mocks.js"
                 data-name="v1.2.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.3">v1.2.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.2/angular-mocks.js"
                 data-name="v1.2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.2">v1.2.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.1/angular-mocks.js"
                 data-name="v1.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.1">v1.2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.0-rc.3/angular-mocks.js"
                 data-name="v1.2.0-rc.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.0-rc.3">v1.2.0-rc.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.0-rc.2/angular-mocks.js"
                 data-name="v1.2.0-rc.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.0-rc.2">v1.2.0-rc.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.0-rc.1/angular-mocks.js"
                 data-name="v1.2.0-rc.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.0-rc.1">v1.2.0-rc.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.0/angular-mocks.js"
                 data-name="v1.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.0">v1.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.0.8/angular-mocks.js"
                 data-name="v1.0.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.8">v1.0.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.0.7/angular-mocks.js"
                 data-name="v1.0.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.7">v1.0.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.0.6/angular-mocks.js"
                 data-name="v1.0.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.6">v1.0.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.0.5/angular-mocks.js"
                 data-name="v1.0.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.5">v1.0.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.0.4/angular-mocks.js"
                 data-name="v1.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.4">v1.0.4</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/angular/bower-angular-mocks/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="angular-mocks.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/angular/bower-angular-mocks" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">bower-angular-mocks</span></a></span></span><span class="separator"> / </span><strong class="final-path">angular-mocks.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
      <img alt="NgDashboard" class="main-avatar" data-user="6013193" height="24" src="https://avatars1.githubusercontent.com/u/6013193?v=2&amp;s=48" width="24" />
      <span class="author"><a href="/NgDashboard" rel="contributor">NgDashboard</a></span>
      <time datetime="2014-08-04T16:08:49-07:00" is="relative-time">August 04, 2014</time>
      <div class="commit-title">
          <a href="/angular/bower-angular-mocks/commit/fa940be728433a78ac716d60bb72720fe191b662" class="message" data-pjax="true" title="v1.2.22-build.366+sha.76a0eb8">v1.2.22-build.366+sha.76a0eb8</a>
      </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>5</strong>  contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="NgDashboard" href="/angular/bower-angular-mocks/commits/master/angular-mocks.js?author=NgDashboard"><img alt="NgDashboard" data-user="6013193" height="20" src="https://avatars3.githubusercontent.com/u/6013193?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="btford" href="/angular/bower-angular-mocks/commits/master/angular-mocks.js?author=btford"><img alt="Brian Ford" data-user="474988" height="20" src="https://avatars0.githubusercontent.com/u/474988?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="jeffbcross" href="/angular/bower-angular-mocks/commits/master/angular-mocks.js?author=jeffbcross"><img alt="Jeff Cross" data-user="463703" height="20" src="https://avatars2.githubusercontent.com/u/463703?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="tbosch" href="/angular/bower-angular-mocks/commits/master/angular-mocks.js?author=tbosch"><img alt="Tobias Bosch" data-user="690815" height="20" src="https://avatars1.githubusercontent.com/u/690815?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="vojtajina" href="/angular/bower-angular-mocks/commits/master/angular-mocks.js?author=vojtajina"><img alt="Vojta Jina" data-user="46647" height="20" src="https://avatars2.githubusercontent.com/u/46647?v=2&amp;s=40" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="NgDashboard" data-user="6013193" height="24" src="https://avatars1.githubusercontent.com/u/6013193?v=2&amp;s=48" width="24" />
            <a href="/NgDashboard">NgDashboard</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Brian Ford" data-user="474988" height="24" src="https://avatars2.githubusercontent.com/u/474988?v=2&amp;s=48" width="24" />
            <a href="/btford">btford</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jeff Cross" data-user="463703" height="24" src="https://avatars0.githubusercontent.com/u/463703?v=2&amp;s=48" width="24" />
            <a href="/jeffbcross">jeffbcross</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Tobias Bosch" data-user="690815" height="24" src="https://avatars3.githubusercontent.com/u/690815?v=2&amp;s=48" width="24" />
            <a href="/tbosch">tbosch</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Vojta Jina" data-user="46647" height="24" src="https://avatars0.githubusercontent.com/u/46647?v=2&amp;s=48" width="24" />
            <a href="/vojtajina">vojtajina</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>2174 lines (1927 sloc)</span>
          <span class="meta-divider"></span>
        <span>67.966 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/angular/bower-angular-mocks/raw/master/angular-mocks.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/angular/bower-angular-mocks/blame/master/angular-mocks.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/angular/bower-angular-mocks/commits/master/angular-mocks.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw"
             href="http://windows.github.com" aria-label="Open this file in GitHub for Windows">
              <span class="octicon octicon-device-desktop"></span>
          </a>

            <a class="octicon-button disabled tooltipped tooltipped-w" href="#"
               aria-label="You must be signed in to make or propose changes"><span class="octicon octicon-pencil"></span></a>

          <a class="octicon-button danger disabled tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript">
       <table class="file-code file-diff tab-size-8">
         <tr class="file-code-line">
           <td class="blob-line-nums">
             <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>
<span id="L704" rel="#L704">704</span>
<span id="L705" rel="#L705">705</span>
<span id="L706" rel="#L706">706</span>
<span id="L707" rel="#L707">707</span>
<span id="L708" rel="#L708">708</span>
<span id="L709" rel="#L709">709</span>
<span id="L710" rel="#L710">710</span>
<span id="L711" rel="#L711">711</span>
<span id="L712" rel="#L712">712</span>
<span id="L713" rel="#L713">713</span>
<span id="L714" rel="#L714">714</span>
<span id="L715" rel="#L715">715</span>
<span id="L716" rel="#L716">716</span>
<span id="L717" rel="#L717">717</span>
<span id="L718" rel="#L718">718</span>
<span id="L719" rel="#L719">719</span>
<span id="L720" rel="#L720">720</span>
<span id="L721" rel="#L721">721</span>
<span id="L722" rel="#L722">722</span>
<span id="L723" rel="#L723">723</span>
<span id="L724" rel="#L724">724</span>
<span id="L725" rel="#L725">725</span>
<span id="L726" rel="#L726">726</span>
<span id="L727" rel="#L727">727</span>
<span id="L728" rel="#L728">728</span>
<span id="L729" rel="#L729">729</span>
<span id="L730" rel="#L730">730</span>
<span id="L731" rel="#L731">731</span>
<span id="L732" rel="#L732">732</span>
<span id="L733" rel="#L733">733</span>
<span id="L734" rel="#L734">734</span>
<span id="L735" rel="#L735">735</span>
<span id="L736" rel="#L736">736</span>
<span id="L737" rel="#L737">737</span>
<span id="L738" rel="#L738">738</span>
<span id="L739" rel="#L739">739</span>
<span id="L740" rel="#L740">740</span>
<span id="L741" rel="#L741">741</span>
<span id="L742" rel="#L742">742</span>
<span id="L743" rel="#L743">743</span>
<span id="L744" rel="#L744">744</span>
<span id="L745" rel="#L745">745</span>
<span id="L746" rel="#L746">746</span>
<span id="L747" rel="#L747">747</span>
<span id="L748" rel="#L748">748</span>
<span id="L749" rel="#L749">749</span>
<span id="L750" rel="#L750">750</span>
<span id="L751" rel="#L751">751</span>
<span id="L752" rel="#L752">752</span>
<span id="L753" rel="#L753">753</span>
<span id="L754" rel="#L754">754</span>
<span id="L755" rel="#L755">755</span>
<span id="L756" rel="#L756">756</span>
<span id="L757" rel="#L757">757</span>
<span id="L758" rel="#L758">758</span>
<span id="L759" rel="#L759">759</span>
<span id="L760" rel="#L760">760</span>
<span id="L761" rel="#L761">761</span>
<span id="L762" rel="#L762">762</span>
<span id="L763" rel="#L763">763</span>
<span id="L764" rel="#L764">764</span>
<span id="L765" rel="#L765">765</span>
<span id="L766" rel="#L766">766</span>
<span id="L767" rel="#L767">767</span>
<span id="L768" rel="#L768">768</span>
<span id="L769" rel="#L769">769</span>
<span id="L770" rel="#L770">770</span>
<span id="L771" rel="#L771">771</span>
<span id="L772" rel="#L772">772</span>
<span id="L773" rel="#L773">773</span>
<span id="L774" rel="#L774">774</span>
<span id="L775" rel="#L775">775</span>
<span id="L776" rel="#L776">776</span>
<span id="L777" rel="#L777">777</span>
<span id="L778" rel="#L778">778</span>
<span id="L779" rel="#L779">779</span>
<span id="L780" rel="#L780">780</span>
<span id="L781" rel="#L781">781</span>
<span id="L782" rel="#L782">782</span>
<span id="L783" rel="#L783">783</span>
<span id="L784" rel="#L784">784</span>
<span id="L785" rel="#L785">785</span>
<span id="L786" rel="#L786">786</span>
<span id="L787" rel="#L787">787</span>
<span id="L788" rel="#L788">788</span>
<span id="L789" rel="#L789">789</span>
<span id="L790" rel="#L790">790</span>
<span id="L791" rel="#L791">791</span>
<span id="L792" rel="#L792">792</span>
<span id="L793" rel="#L793">793</span>
<span id="L794" rel="#L794">794</span>
<span id="L795" rel="#L795">795</span>
<span id="L796" rel="#L796">796</span>
<span id="L797" rel="#L797">797</span>
<span id="L798" rel="#L798">798</span>
<span id="L799" rel="#L799">799</span>
<span id="L800" rel="#L800">800</span>
<span id="L801" rel="#L801">801</span>
<span id="L802" rel="#L802">802</span>
<span id="L803" rel="#L803">803</span>
<span id="L804" rel="#L804">804</span>
<span id="L805" rel="#L805">805</span>
<span id="L806" rel="#L806">806</span>
<span id="L807" rel="#L807">807</span>
<span id="L808" rel="#L808">808</span>
<span id="L809" rel="#L809">809</span>
<span id="L810" rel="#L810">810</span>
<span id="L811" rel="#L811">811</span>
<span id="L812" rel="#L812">812</span>
<span id="L813" rel="#L813">813</span>
<span id="L814" rel="#L814">814</span>
<span id="L815" rel="#L815">815</span>
<span id="L816" rel="#L816">816</span>
<span id="L817" rel="#L817">817</span>
<span id="L818" rel="#L818">818</span>
<span id="L819" rel="#L819">819</span>
<span id="L820" rel="#L820">820</span>
<span id="L821" rel="#L821">821</span>
<span id="L822" rel="#L822">822</span>
<span id="L823" rel="#L823">823</span>
<span id="L824" rel="#L824">824</span>
<span id="L825" rel="#L825">825</span>
<span id="L826" rel="#L826">826</span>
<span id="L827" rel="#L827">827</span>
<span id="L828" rel="#L828">828</span>
<span id="L829" rel="#L829">829</span>
<span id="L830" rel="#L830">830</span>
<span id="L831" rel="#L831">831</span>
<span id="L832" rel="#L832">832</span>
<span id="L833" rel="#L833">833</span>
<span id="L834" rel="#L834">834</span>
<span id="L835" rel="#L835">835</span>
<span id="L836" rel="#L836">836</span>
<span id="L837" rel="#L837">837</span>
<span id="L838" rel="#L838">838</span>
<span id="L839" rel="#L839">839</span>
<span id="L840" rel="#L840">840</span>
<span id="L841" rel="#L841">841</span>
<span id="L842" rel="#L842">842</span>
<span id="L843" rel="#L843">843</span>
<span id="L844" rel="#L844">844</span>
<span id="L845" rel="#L845">845</span>
<span id="L846" rel="#L846">846</span>
<span id="L847" rel="#L847">847</span>
<span id="L848" rel="#L848">848</span>
<span id="L849" rel="#L849">849</span>
<span id="L850" rel="#L850">850</span>
<span id="L851" rel="#L851">851</span>
<span id="L852" rel="#L852">852</span>
<span id="L853" rel="#L853">853</span>
<span id="L854" rel="#L854">854</span>
<span id="L855" rel="#L855">855</span>
<span id="L856" rel="#L856">856</span>
<span id="L857" rel="#L857">857</span>
<span id="L858" rel="#L858">858</span>
<span id="L859" rel="#L859">859</span>
<span id="L860" rel="#L860">860</span>
<span id="L861" rel="#L861">861</span>
<span id="L862" rel="#L862">862</span>
<span id="L863" rel="#L863">863</span>
<span id="L864" rel="#L864">864</span>
<span id="L865" rel="#L865">865</span>
<span id="L866" rel="#L866">866</span>
<span id="L867" rel="#L867">867</span>
<span id="L868" rel="#L868">868</span>
<span id="L869" rel="#L869">869</span>
<span id="L870" rel="#L870">870</span>
<span id="L871" rel="#L871">871</span>
<span id="L872" rel="#L872">872</span>
<span id="L873" rel="#L873">873</span>
<span id="L874" rel="#L874">874</span>
<span id="L875" rel="#L875">875</span>
<span id="L876" rel="#L876">876</span>
<span id="L877" rel="#L877">877</span>
<span id="L878" rel="#L878">878</span>
<span id="L879" rel="#L879">879</span>
<span id="L880" rel="#L880">880</span>
<span id="L881" rel="#L881">881</span>
<span id="L882" rel="#L882">882</span>
<span id="L883" rel="#L883">883</span>
<span id="L884" rel="#L884">884</span>
<span id="L885" rel="#L885">885</span>
<span id="L886" rel="#L886">886</span>
<span id="L887" rel="#L887">887</span>
<span id="L888" rel="#L888">888</span>
<span id="L889" rel="#L889">889</span>
<span id="L890" rel="#L890">890</span>
<span id="L891" rel="#L891">891</span>
<span id="L892" rel="#L892">892</span>
<span id="L893" rel="#L893">893</span>
<span id="L894" rel="#L894">894</span>
<span id="L895" rel="#L895">895</span>
<span id="L896" rel="#L896">896</span>
<span id="L897" rel="#L897">897</span>
<span id="L898" rel="#L898">898</span>
<span id="L899" rel="#L899">899</span>
<span id="L900" rel="#L900">900</span>
<span id="L901" rel="#L901">901</span>
<span id="L902" rel="#L902">902</span>
<span id="L903" rel="#L903">903</span>
<span id="L904" rel="#L904">904</span>
<span id="L905" rel="#L905">905</span>
<span id="L906" rel="#L906">906</span>
<span id="L907" rel="#L907">907</span>
<span id="L908" rel="#L908">908</span>
<span id="L909" rel="#L909">909</span>
<span id="L910" rel="#L910">910</span>
<span id="L911" rel="#L911">911</span>
<span id="L912" rel="#L912">912</span>
<span id="L913" rel="#L913">913</span>
<span id="L914" rel="#L914">914</span>
<span id="L915" rel="#L915">915</span>
<span id="L916" rel="#L916">916</span>
<span id="L917" rel="#L917">917</span>
<span id="L918" rel="#L918">918</span>
<span id="L919" rel="#L919">919</span>
<span id="L920" rel="#L920">920</span>
<span id="L921" rel="#L921">921</span>
<span id="L922" rel="#L922">922</span>
<span id="L923" rel="#L923">923</span>
<span id="L924" rel="#L924">924</span>
<span id="L925" rel="#L925">925</span>
<span id="L926" rel="#L926">926</span>
<span id="L927" rel="#L927">927</span>
<span id="L928" rel="#L928">928</span>
<span id="L929" rel="#L929">929</span>
<span id="L930" rel="#L930">930</span>
<span id="L931" rel="#L931">931</span>
<span id="L932" rel="#L932">932</span>
<span id="L933" rel="#L933">933</span>
<span id="L934" rel="#L934">934</span>
<span id="L935" rel="#L935">935</span>
<span id="L936" rel="#L936">936</span>
<span id="L937" rel="#L937">937</span>
<span id="L938" rel="#L938">938</span>
<span id="L939" rel="#L939">939</span>
<span id="L940" rel="#L940">940</span>
<span id="L941" rel="#L941">941</span>
<span id="L942" rel="#L942">942</span>
<span id="L943" rel="#L943">943</span>
<span id="L944" rel="#L944">944</span>
<span id="L945" rel="#L945">945</span>
<span id="L946" rel="#L946">946</span>
<span id="L947" rel="#L947">947</span>
<span id="L948" rel="#L948">948</span>
<span id="L949" rel="#L949">949</span>
<span id="L950" rel="#L950">950</span>
<span id="L951" rel="#L951">951</span>
<span id="L952" rel="#L952">952</span>
<span id="L953" rel="#L953">953</span>
<span id="L954" rel="#L954">954</span>
<span id="L955" rel="#L955">955</span>
<span id="L956" rel="#L956">956</span>
<span id="L957" rel="#L957">957</span>
<span id="L958" rel="#L958">958</span>
<span id="L959" rel="#L959">959</span>
<span id="L960" rel="#L960">960</span>
<span id="L961" rel="#L961">961</span>
<span id="L962" rel="#L962">962</span>
<span id="L963" rel="#L963">963</span>
<span id="L964" rel="#L964">964</span>
<span id="L965" rel="#L965">965</span>
<span id="L966" rel="#L966">966</span>
<span id="L967" rel="#L967">967</span>
<span id="L968" rel="#L968">968</span>
<span id="L969" rel="#L969">969</span>
<span id="L970" rel="#L970">970</span>
<span id="L971" rel="#L971">971</span>
<span id="L972" rel="#L972">972</span>
<span id="L973" rel="#L973">973</span>
<span id="L974" rel="#L974">974</span>
<span id="L975" rel="#L975">975</span>
<span id="L976" rel="#L976">976</span>
<span id="L977" rel="#L977">977</span>
<span id="L978" rel="#L978">978</span>
<span id="L979" rel="#L979">979</span>
<span id="L980" rel="#L980">980</span>
<span id="L981" rel="#L981">981</span>
<span id="L982" rel="#L982">982</span>
<span id="L983" rel="#L983">983</span>
<span id="L984" rel="#L984">984</span>
<span id="L985" rel="#L985">985</span>
<span id="L986" rel="#L986">986</span>
<span id="L987" rel="#L987">987</span>
<span id="L988" rel="#L988">988</span>
<span id="L989" rel="#L989">989</span>
<span id="L990" rel="#L990">990</span>
<span id="L991" rel="#L991">991</span>
<span id="L992" rel="#L992">992</span>
<span id="L993" rel="#L993">993</span>
<span id="L994" rel="#L994">994</span>
<span id="L995" rel="#L995">995</span>
<span id="L996" rel="#L996">996</span>
<span id="L997" rel="#L997">997</span>
<span id="L998" rel="#L998">998</span>
<span id="L999" rel="#L999">999</span>
<span id="L1000" rel="#L1000">1000</span>
<span id="L1001" rel="#L1001">1001</span>
<span id="L1002" rel="#L1002">1002</span>
<span id="L1003" rel="#L1003">1003</span>
<span id="L1004" rel="#L1004">1004</span>
<span id="L1005" rel="#L1005">1005</span>
<span id="L1006" rel="#L1006">1006</span>
<span id="L1007" rel="#L1007">1007</span>
<span id="L1008" rel="#L1008">1008</span>
<span id="L1009" rel="#L1009">1009</span>
<span id="L1010" rel="#L1010">1010</span>
<span id="L1011" rel="#L1011">1011</span>
<span id="L1012" rel="#L1012">1012</span>
<span id="L1013" rel="#L1013">1013</span>
<span id="L1014" rel="#L1014">1014</span>
<span id="L1015" rel="#L1015">1015</span>
<span id="L1016" rel="#L1016">1016</span>
<span id="L1017" rel="#L1017">1017</span>
<span id="L1018" rel="#L1018">1018</span>
<span id="L1019" rel="#L1019">1019</span>
<span id="L1020" rel="#L1020">1020</span>
<span id="L1021" rel="#L1021">1021</span>
<span id="L1022" rel="#L1022">1022</span>
<span id="L1023" rel="#L1023">1023</span>
<span id="L1024" rel="#L1024">1024</span>
<span id="L1025" rel="#L1025">1025</span>
<span id="L1026" rel="#L1026">1026</span>
<span id="L1027" rel="#L1027">1027</span>
<span id="L1028" rel="#L1028">1028</span>
<span id="L1029" rel="#L1029">1029</span>
<span id="L1030" rel="#L1030">1030</span>
<span id="L1031" rel="#L1031">1031</span>
<span id="L1032" rel="#L1032">1032</span>
<span id="L1033" rel="#L1033">1033</span>
<span id="L1034" rel="#L1034">1034</span>
<span id="L1035" rel="#L1035">1035</span>
<span id="L1036" rel="#L1036">1036</span>
<span id="L1037" rel="#L1037">1037</span>
<span id="L1038" rel="#L1038">1038</span>
<span id="L1039" rel="#L1039">1039</span>
<span id="L1040" rel="#L1040">1040</span>
<span id="L1041" rel="#L1041">1041</span>
<span id="L1042" rel="#L1042">1042</span>
<span id="L1043" rel="#L1043">1043</span>
<span id="L1044" rel="#L1044">1044</span>
<span id="L1045" rel="#L1045">1045</span>
<span id="L1046" rel="#L1046">1046</span>
<span id="L1047" rel="#L1047">1047</span>
<span id="L1048" rel="#L1048">1048</span>
<span id="L1049" rel="#L1049">1049</span>
<span id="L1050" rel="#L1050">1050</span>
<span id="L1051" rel="#L1051">1051</span>
<span id="L1052" rel="#L1052">1052</span>
<span id="L1053" rel="#L1053">1053</span>
<span id="L1054" rel="#L1054">1054</span>
<span id="L1055" rel="#L1055">1055</span>
<span id="L1056" rel="#L1056">1056</span>
<span id="L1057" rel="#L1057">1057</span>
<span id="L1058" rel="#L1058">1058</span>
<span id="L1059" rel="#L1059">1059</span>
<span id="L1060" rel="#L1060">1060</span>
<span id="L1061" rel="#L1061">1061</span>
<span id="L1062" rel="#L1062">1062</span>
<span id="L1063" rel="#L1063">1063</span>
<span id="L1064" rel="#L1064">1064</span>
<span id="L1065" rel="#L1065">1065</span>
<span id="L1066" rel="#L1066">1066</span>
<span id="L1067" rel="#L1067">1067</span>
<span id="L1068" rel="#L1068">1068</span>
<span id="L1069" rel="#L1069">1069</span>
<span id="L1070" rel="#L1070">1070</span>
<span id="L1071" rel="#L1071">1071</span>
<span id="L1072" rel="#L1072">1072</span>
<span id="L1073" rel="#L1073">1073</span>
<span id="L1074" rel="#L1074">1074</span>
<span id="L1075" rel="#L1075">1075</span>
<span id="L1076" rel="#L1076">1076</span>
<span id="L1077" rel="#L1077">1077</span>
<span id="L1078" rel="#L1078">1078</span>
<span id="L1079" rel="#L1079">1079</span>
<span id="L1080" rel="#L1080">1080</span>
<span id="L1081" rel="#L1081">1081</span>
<span id="L1082" rel="#L1082">1082</span>
<span id="L1083" rel="#L1083">1083</span>
<span id="L1084" rel="#L1084">1084</span>
<span id="L1085" rel="#L1085">1085</span>
<span id="L1086" rel="#L1086">1086</span>
<span id="L1087" rel="#L1087">1087</span>
<span id="L1088" rel="#L1088">1088</span>
<span id="L1089" rel="#L1089">1089</span>
<span id="L1090" rel="#L1090">1090</span>
<span id="L1091" rel="#L1091">1091</span>
<span id="L1092" rel="#L1092">1092</span>
<span id="L1093" rel="#L1093">1093</span>
<span id="L1094" rel="#L1094">1094</span>
<span id="L1095" rel="#L1095">1095</span>
<span id="L1096" rel="#L1096">1096</span>
<span id="L1097" rel="#L1097">1097</span>
<span id="L1098" rel="#L1098">1098</span>
<span id="L1099" rel="#L1099">1099</span>
<span id="L1100" rel="#L1100">1100</span>
<span id="L1101" rel="#L1101">1101</span>
<span id="L1102" rel="#L1102">1102</span>
<span id="L1103" rel="#L1103">1103</span>
<span id="L1104" rel="#L1104">1104</span>
<span id="L1105" rel="#L1105">1105</span>
<span id="L1106" rel="#L1106">1106</span>
<span id="L1107" rel="#L1107">1107</span>
<span id="L1108" rel="#L1108">1108</span>
<span id="L1109" rel="#L1109">1109</span>
<span id="L1110" rel="#L1110">1110</span>
<span id="L1111" rel="#L1111">1111</span>
<span id="L1112" rel="#L1112">1112</span>
<span id="L1113" rel="#L1113">1113</span>
<span id="L1114" rel="#L1114">1114</span>
<span id="L1115" rel="#L1115">1115</span>
<span id="L1116" rel="#L1116">1116</span>
<span id="L1117" rel="#L1117">1117</span>
<span id="L1118" rel="#L1118">1118</span>
<span id="L1119" rel="#L1119">1119</span>
<span id="L1120" rel="#L1120">1120</span>
<span id="L1121" rel="#L1121">1121</span>
<span id="L1122" rel="#L1122">1122</span>
<span id="L1123" rel="#L1123">1123</span>
<span id="L1124" rel="#L1124">1124</span>
<span id="L1125" rel="#L1125">1125</span>
<span id="L1126" rel="#L1126">1126</span>
<span id="L1127" rel="#L1127">1127</span>
<span id="L1128" rel="#L1128">1128</span>
<span id="L1129" rel="#L1129">1129</span>
<span id="L1130" rel="#L1130">1130</span>
<span id="L1131" rel="#L1131">1131</span>
<span id="L1132" rel="#L1132">1132</span>
<span id="L1133" rel="#L1133">1133</span>
<span id="L1134" rel="#L1134">1134</span>
<span id="L1135" rel="#L1135">1135</span>
<span id="L1136" rel="#L1136">1136</span>
<span id="L1137" rel="#L1137">1137</span>
<span id="L1138" rel="#L1138">1138</span>
<span id="L1139" rel="#L1139">1139</span>
<span id="L1140" rel="#L1140">1140</span>
<span id="L1141" rel="#L1141">1141</span>
<span id="L1142" rel="#L1142">1142</span>
<span id="L1143" rel="#L1143">1143</span>
<span id="L1144" rel="#L1144">1144</span>
<span id="L1145" rel="#L1145">1145</span>
<span id="L1146" rel="#L1146">1146</span>
<span id="L1147" rel="#L1147">1147</span>
<span id="L1148" rel="#L1148">1148</span>
<span id="L1149" rel="#L1149">1149</span>
<span id="L1150" rel="#L1150">1150</span>
<span id="L1151" rel="#L1151">1151</span>
<span id="L1152" rel="#L1152">1152</span>
<span id="L1153" rel="#L1153">1153</span>
<span id="L1154" rel="#L1154">1154</span>
<span id="L1155" rel="#L1155">1155</span>
<span id="L1156" rel="#L1156">1156</span>
<span id="L1157" rel="#L1157">1157</span>
<span id="L1158" rel="#L1158">1158</span>
<span id="L1159" rel="#L1159">1159</span>
<span id="L1160" rel="#L1160">1160</span>
<span id="L1161" rel="#L1161">1161</span>
<span id="L1162" rel="#L1162">1162</span>
<span id="L1163" rel="#L1163">1163</span>
<span id="L1164" rel="#L1164">1164</span>
<span id="L1165" rel="#L1165">1165</span>
<span id="L1166" rel="#L1166">1166</span>
<span id="L1167" rel="#L1167">1167</span>
<span id="L1168" rel="#L1168">1168</span>
<span id="L1169" rel="#L1169">1169</span>
<span id="L1170" rel="#L1170">1170</span>
<span id="L1171" rel="#L1171">1171</span>
<span id="L1172" rel="#L1172">1172</span>
<span id="L1173" rel="#L1173">1173</span>
<span id="L1174" rel="#L1174">1174</span>
<span id="L1175" rel="#L1175">1175</span>
<span id="L1176" rel="#L1176">1176</span>
<span id="L1177" rel="#L1177">1177</span>
<span id="L1178" rel="#L1178">1178</span>
<span id="L1179" rel="#L1179">1179</span>
<span id="L1180" rel="#L1180">1180</span>
<span id="L1181" rel="#L1181">1181</span>
<span id="L1182" rel="#L1182">1182</span>
<span id="L1183" rel="#L1183">1183</span>
<span id="L1184" rel="#L1184">1184</span>
<span id="L1185" rel="#L1185">1185</span>
<span id="L1186" rel="#L1186">1186</span>
<span id="L1187" rel="#L1187">1187</span>
<span id="L1188" rel="#L1188">1188</span>
<span id="L1189" rel="#L1189">1189</span>
<span id="L1190" rel="#L1190">1190</span>
<span id="L1191" rel="#L1191">1191</span>
<span id="L1192" rel="#L1192">1192</span>
<span id="L1193" rel="#L1193">1193</span>
<span id="L1194" rel="#L1194">1194</span>
<span id="L1195" rel="#L1195">1195</span>
<span id="L1196" rel="#L1196">1196</span>
<span id="L1197" rel="#L1197">1197</span>
<span id="L1198" rel="#L1198">1198</span>
<span id="L1199" rel="#L1199">1199</span>
<span id="L1200" rel="#L1200">1200</span>
<span id="L1201" rel="#L1201">1201</span>
<span id="L1202" rel="#L1202">1202</span>
<span id="L1203" rel="#L1203">1203</span>
<span id="L1204" rel="#L1204">1204</span>
<span id="L1205" rel="#L1205">1205</span>
<span id="L1206" rel="#L1206">1206</span>
<span id="L1207" rel="#L1207">1207</span>
<span id="L1208" rel="#L1208">1208</span>
<span id="L1209" rel="#L1209">1209</span>
<span id="L1210" rel="#L1210">1210</span>
<span id="L1211" rel="#L1211">1211</span>
<span id="L1212" rel="#L1212">1212</span>
<span id="L1213" rel="#L1213">1213</span>
<span id="L1214" rel="#L1214">1214</span>
<span id="L1215" rel="#L1215">1215</span>
<span id="L1216" rel="#L1216">1216</span>
<span id="L1217" rel="#L1217">1217</span>
<span id="L1218" rel="#L1218">1218</span>
<span id="L1219" rel="#L1219">1219</span>
<span id="L1220" rel="#L1220">1220</span>
<span id="L1221" rel="#L1221">1221</span>
<span id="L1222" rel="#L1222">1222</span>
<span id="L1223" rel="#L1223">1223</span>
<span id="L1224" rel="#L1224">1224</span>
<span id="L1225" rel="#L1225">1225</span>
<span id="L1226" rel="#L1226">1226</span>
<span id="L1227" rel="#L1227">1227</span>
<span id="L1228" rel="#L1228">1228</span>
<span id="L1229" rel="#L1229">1229</span>
<span id="L1230" rel="#L1230">1230</span>
<span id="L1231" rel="#L1231">1231</span>
<span id="L1232" rel="#L1232">1232</span>
<span id="L1233" rel="#L1233">1233</span>
<span id="L1234" rel="#L1234">1234</span>
<span id="L1235" rel="#L1235">1235</span>
<span id="L1236" rel="#L1236">1236</span>
<span id="L1237" rel="#L1237">1237</span>
<span id="L1238" rel="#L1238">1238</span>
<span id="L1239" rel="#L1239">1239</span>
<span id="L1240" rel="#L1240">1240</span>
<span id="L1241" rel="#L1241">1241</span>
<span id="L1242" rel="#L1242">1242</span>
<span id="L1243" rel="#L1243">1243</span>
<span id="L1244" rel="#L1244">1244</span>
<span id="L1245" rel="#L1245">1245</span>
<span id="L1246" rel="#L1246">1246</span>
<span id="L1247" rel="#L1247">1247</span>
<span id="L1248" rel="#L1248">1248</span>
<span id="L1249" rel="#L1249">1249</span>
<span id="L1250" rel="#L1250">1250</span>
<span id="L1251" rel="#L1251">1251</span>
<span id="L1252" rel="#L1252">1252</span>
<span id="L1253" rel="#L1253">1253</span>
<span id="L1254" rel="#L1254">1254</span>
<span id="L1255" rel="#L1255">1255</span>
<span id="L1256" rel="#L1256">1256</span>
<span id="L1257" rel="#L1257">1257</span>
<span id="L1258" rel="#L1258">1258</span>
<span id="L1259" rel="#L1259">1259</span>
<span id="L1260" rel="#L1260">1260</span>
<span id="L1261" rel="#L1261">1261</span>
<span id="L1262" rel="#L1262">1262</span>
<span id="L1263" rel="#L1263">1263</span>
<span id="L1264" rel="#L1264">1264</span>
<span id="L1265" rel="#L1265">1265</span>
<span id="L1266" rel="#L1266">1266</span>
<span id="L1267" rel="#L1267">1267</span>
<span id="L1268" rel="#L1268">1268</span>
<span id="L1269" rel="#L1269">1269</span>
<span id="L1270" rel="#L1270">1270</span>
<span id="L1271" rel="#L1271">1271</span>
<span id="L1272" rel="#L1272">1272</span>
<span id="L1273" rel="#L1273">1273</span>
<span id="L1274" rel="#L1274">1274</span>
<span id="L1275" rel="#L1275">1275</span>
<span id="L1276" rel="#L1276">1276</span>
<span id="L1277" rel="#L1277">1277</span>
<span id="L1278" rel="#L1278">1278</span>
<span id="L1279" rel="#L1279">1279</span>
<span id="L1280" rel="#L1280">1280</span>
<span id="L1281" rel="#L1281">1281</span>
<span id="L1282" rel="#L1282">1282</span>
<span id="L1283" rel="#L1283">1283</span>
<span id="L1284" rel="#L1284">1284</span>
<span id="L1285" rel="#L1285">1285</span>
<span id="L1286" rel="#L1286">1286</span>
<span id="L1287" rel="#L1287">1287</span>
<span id="L1288" rel="#L1288">1288</span>
<span id="L1289" rel="#L1289">1289</span>
<span id="L1290" rel="#L1290">1290</span>
<span id="L1291" rel="#L1291">1291</span>
<span id="L1292" rel="#L1292">1292</span>
<span id="L1293" rel="#L1293">1293</span>
<span id="L1294" rel="#L1294">1294</span>
<span id="L1295" rel="#L1295">1295</span>
<span id="L1296" rel="#L1296">1296</span>
<span id="L1297" rel="#L1297">1297</span>
<span id="L1298" rel="#L1298">1298</span>
<span id="L1299" rel="#L1299">1299</span>
<span id="L1300" rel="#L1300">1300</span>
<span id="L1301" rel="#L1301">1301</span>
<span id="L1302" rel="#L1302">1302</span>
<span id="L1303" rel="#L1303">1303</span>
<span id="L1304" rel="#L1304">1304</span>
<span id="L1305" rel="#L1305">1305</span>
<span id="L1306" rel="#L1306">1306</span>
<span id="L1307" rel="#L1307">1307</span>
<span id="L1308" rel="#L1308">1308</span>
<span id="L1309" rel="#L1309">1309</span>
<span id="L1310" rel="#L1310">1310</span>
<span id="L1311" rel="#L1311">1311</span>
<span id="L1312" rel="#L1312">1312</span>
<span id="L1313" rel="#L1313">1313</span>
<span id="L1314" rel="#L1314">1314</span>
<span id="L1315" rel="#L1315">1315</span>
<span id="L1316" rel="#L1316">1316</span>
<span id="L1317" rel="#L1317">1317</span>
<span id="L1318" rel="#L1318">1318</span>
<span id="L1319" rel="#L1319">1319</span>
<span id="L1320" rel="#L1320">1320</span>
<span id="L1321" rel="#L1321">1321</span>
<span id="L1322" rel="#L1322">1322</span>
<span id="L1323" rel="#L1323">1323</span>
<span id="L1324" rel="#L1324">1324</span>
<span id="L1325" rel="#L1325">1325</span>
<span id="L1326" rel="#L1326">1326</span>
<span id="L1327" rel="#L1327">1327</span>
<span id="L1328" rel="#L1328">1328</span>
<span id="L1329" rel="#L1329">1329</span>
<span id="L1330" rel="#L1330">1330</span>
<span id="L1331" rel="#L1331">1331</span>
<span id="L1332" rel="#L1332">1332</span>
<span id="L1333" rel="#L1333">1333</span>
<span id="L1334" rel="#L1334">1334</span>
<span id="L1335" rel="#L1335">1335</span>
<span id="L1336" rel="#L1336">1336</span>
<span id="L1337" rel="#L1337">1337</span>
<span id="L1338" rel="#L1338">1338</span>
<span id="L1339" rel="#L1339">1339</span>
<span id="L1340" rel="#L1340">1340</span>
<span id="L1341" rel="#L1341">1341</span>
<span id="L1342" rel="#L1342">1342</span>
<span id="L1343" rel="#L1343">1343</span>
<span id="L1344" rel="#L1344">1344</span>
<span id="L1345" rel="#L1345">1345</span>
<span id="L1346" rel="#L1346">1346</span>
<span id="L1347" rel="#L1347">1347</span>
<span id="L1348" rel="#L1348">1348</span>
<span id="L1349" rel="#L1349">1349</span>
<span id="L1350" rel="#L1350">1350</span>
<span id="L1351" rel="#L1351">1351</span>
<span id="L1352" rel="#L1352">1352</span>
<span id="L1353" rel="#L1353">1353</span>
<span id="L1354" rel="#L1354">1354</span>
<span id="L1355" rel="#L1355">1355</span>
<span id="L1356" rel="#L1356">1356</span>
<span id="L1357" rel="#L1357">1357</span>
<span id="L1358" rel="#L1358">1358</span>
<span id="L1359" rel="#L1359">1359</span>
<span id="L1360" rel="#L1360">1360</span>
<span id="L1361" rel="#L1361">1361</span>
<span id="L1362" rel="#L1362">1362</span>
<span id="L1363" rel="#L1363">1363</span>
<span id="L1364" rel="#L1364">1364</span>
<span id="L1365" rel="#L1365">1365</span>
<span id="L1366" rel="#L1366">1366</span>
<span id="L1367" rel="#L1367">1367</span>
<span id="L1368" rel="#L1368">1368</span>
<span id="L1369" rel="#L1369">1369</span>
<span id="L1370" rel="#L1370">1370</span>
<span id="L1371" rel="#L1371">1371</span>
<span id="L1372" rel="#L1372">1372</span>
<span id="L1373" rel="#L1373">1373</span>
<span id="L1374" rel="#L1374">1374</span>
<span id="L1375" rel="#L1375">1375</span>
<span id="L1376" rel="#L1376">1376</span>
<span id="L1377" rel="#L1377">1377</span>
<span id="L1378" rel="#L1378">1378</span>
<span id="L1379" rel="#L1379">1379</span>
<span id="L1380" rel="#L1380">1380</span>
<span id="L1381" rel="#L1381">1381</span>
<span id="L1382" rel="#L1382">1382</span>
<span id="L1383" rel="#L1383">1383</span>
<span id="L1384" rel="#L1384">1384</span>
<span id="L1385" rel="#L1385">1385</span>
<span id="L1386" rel="#L1386">1386</span>
<span id="L1387" rel="#L1387">1387</span>
<span id="L1388" rel="#L1388">1388</span>
<span id="L1389" rel="#L1389">1389</span>
<span id="L1390" rel="#L1390">1390</span>
<span id="L1391" rel="#L1391">1391</span>
<span id="L1392" rel="#L1392">1392</span>
<span id="L1393" rel="#L1393">1393</span>
<span id="L1394" rel="#L1394">1394</span>
<span id="L1395" rel="#L1395">1395</span>
<span id="L1396" rel="#L1396">1396</span>
<span id="L1397" rel="#L1397">1397</span>
<span id="L1398" rel="#L1398">1398</span>
<span id="L1399" rel="#L1399">1399</span>
<span id="L1400" rel="#L1400">1400</span>
<span id="L1401" rel="#L1401">1401</span>
<span id="L1402" rel="#L1402">1402</span>
<span id="L1403" rel="#L1403">1403</span>
<span id="L1404" rel="#L1404">1404</span>
<span id="L1405" rel="#L1405">1405</span>
<span id="L1406" rel="#L1406">1406</span>
<span id="L1407" rel="#L1407">1407</span>
<span id="L1408" rel="#L1408">1408</span>
<span id="L1409" rel="#L1409">1409</span>
<span id="L1410" rel="#L1410">1410</span>
<span id="L1411" rel="#L1411">1411</span>
<span id="L1412" rel="#L1412">1412</span>
<span id="L1413" rel="#L1413">1413</span>
<span id="L1414" rel="#L1414">1414</span>
<span id="L1415" rel="#L1415">1415</span>
<span id="L1416" rel="#L1416">1416</span>
<span id="L1417" rel="#L1417">1417</span>
<span id="L1418" rel="#L1418">1418</span>
<span id="L1419" rel="#L1419">1419</span>
<span id="L1420" rel="#L1420">1420</span>
<span id="L1421" rel="#L1421">1421</span>
<span id="L1422" rel="#L1422">1422</span>
<span id="L1423" rel="#L1423">1423</span>
<span id="L1424" rel="#L1424">1424</span>
<span id="L1425" rel="#L1425">1425</span>
<span id="L1426" rel="#L1426">1426</span>
<span id="L1427" rel="#L1427">1427</span>
<span id="L1428" rel="#L1428">1428</span>
<span id="L1429" rel="#L1429">1429</span>
<span id="L1430" rel="#L1430">1430</span>
<span id="L1431" rel="#L1431">1431</span>
<span id="L1432" rel="#L1432">1432</span>
<span id="L1433" rel="#L1433">1433</span>
<span id="L1434" rel="#L1434">1434</span>
<span id="L1435" rel="#L1435">1435</span>
<span id="L1436" rel="#L1436">1436</span>
<span id="L1437" rel="#L1437">1437</span>
<span id="L1438" rel="#L1438">1438</span>
<span id="L1439" rel="#L1439">1439</span>
<span id="L1440" rel="#L1440">1440</span>
<span id="L1441" rel="#L1441">1441</span>
<span id="L1442" rel="#L1442">1442</span>
<span id="L1443" rel="#L1443">1443</span>
<span id="L1444" rel="#L1444">1444</span>
<span id="L1445" rel="#L1445">1445</span>
<span id="L1446" rel="#L1446">1446</span>
<span id="L1447" rel="#L1447">1447</span>
<span id="L1448" rel="#L1448">1448</span>
<span id="L1449" rel="#L1449">1449</span>
<span id="L1450" rel="#L1450">1450</span>
<span id="L1451" rel="#L1451">1451</span>
<span id="L1452" rel="#L1452">1452</span>
<span id="L1453" rel="#L1453">1453</span>
<span id="L1454" rel="#L1454">1454</span>
<span id="L1455" rel="#L1455">1455</span>
<span id="L1456" rel="#L1456">1456</span>
<span id="L1457" rel="#L1457">1457</span>
<span id="L1458" rel="#L1458">1458</span>
<span id="L1459" rel="#L1459">1459</span>
<span id="L1460" rel="#L1460">1460</span>
<span id="L1461" rel="#L1461">1461</span>
<span id="L1462" rel="#L1462">1462</span>
<span id="L1463" rel="#L1463">1463</span>
<span id="L1464" rel="#L1464">1464</span>
<span id="L1465" rel="#L1465">1465</span>
<span id="L1466" rel="#L1466">1466</span>
<span id="L1467" rel="#L1467">1467</span>
<span id="L1468" rel="#L1468">1468</span>
<span id="L1469" rel="#L1469">1469</span>
<span id="L1470" rel="#L1470">1470</span>
<span id="L1471" rel="#L1471">1471</span>
<span id="L1472" rel="#L1472">1472</span>
<span id="L1473" rel="#L1473">1473</span>
<span id="L1474" rel="#L1474">1474</span>
<span id="L1475" rel="#L1475">1475</span>
<span id="L1476" rel="#L1476">1476</span>
<span id="L1477" rel="#L1477">1477</span>
<span id="L1478" rel="#L1478">1478</span>
<span id="L1479" rel="#L1479">1479</span>
<span id="L1480" rel="#L1480">1480</span>
<span id="L1481" rel="#L1481">1481</span>
<span id="L1482" rel="#L1482">1482</span>
<span id="L1483" rel="#L1483">1483</span>
<span id="L1484" rel="#L1484">1484</span>
<span id="L1485" rel="#L1485">1485</span>
<span id="L1486" rel="#L1486">1486</span>
<span id="L1487" rel="#L1487">1487</span>
<span id="L1488" rel="#L1488">1488</span>
<span id="L1489" rel="#L1489">1489</span>
<span id="L1490" rel="#L1490">1490</span>
<span id="L1491" rel="#L1491">1491</span>
<span id="L1492" rel="#L1492">1492</span>
<span id="L1493" rel="#L1493">1493</span>
<span id="L1494" rel="#L1494">1494</span>
<span id="L1495" rel="#L1495">1495</span>
<span id="L1496" rel="#L1496">1496</span>
<span id="L1497" rel="#L1497">1497</span>
<span id="L1498" rel="#L1498">1498</span>
<span id="L1499" rel="#L1499">1499</span>
<span id="L1500" rel="#L1500">1500</span>
<span id="L1501" rel="#L1501">1501</span>
<span id="L1502" rel="#L1502">1502</span>
<span id="L1503" rel="#L1503">1503</span>
<span id="L1504" rel="#L1504">1504</span>
<span id="L1505" rel="#L1505">1505</span>
<span id="L1506" rel="#L1506">1506</span>
<span id="L1507" rel="#L1507">1507</span>
<span id="L1508" rel="#L1508">1508</span>
<span id="L1509" rel="#L1509">1509</span>
<span id="L1510" rel="#L1510">1510</span>
<span id="L1511" rel="#L1511">1511</span>
<span id="L1512" rel="#L1512">1512</span>
<span id="L1513" rel="#L1513">1513</span>
<span id="L1514" rel="#L1514">1514</span>
<span id="L1515" rel="#L1515">1515</span>
<span id="L1516" rel="#L1516">1516</span>
<span id="L1517" rel="#L1517">1517</span>
<span id="L1518" rel="#L1518">1518</span>
<span id="L1519" rel="#L1519">1519</span>
<span id="L1520" rel="#L1520">1520</span>
<span id="L1521" rel="#L1521">1521</span>
<span id="L1522" rel="#L1522">1522</span>
<span id="L1523" rel="#L1523">1523</span>
<span id="L1524" rel="#L1524">1524</span>
<span id="L1525" rel="#L1525">1525</span>
<span id="L1526" rel="#L1526">1526</span>
<span id="L1527" rel="#L1527">1527</span>
<span id="L1528" rel="#L1528">1528</span>
<span id="L1529" rel="#L1529">1529</span>
<span id="L1530" rel="#L1530">1530</span>
<span id="L1531" rel="#L1531">1531</span>
<span id="L1532" rel="#L1532">1532</span>
<span id="L1533" rel="#L1533">1533</span>
<span id="L1534" rel="#L1534">1534</span>
<span id="L1535" rel="#L1535">1535</span>
<span id="L1536" rel="#L1536">1536</span>
<span id="L1537" rel="#L1537">1537</span>
<span id="L1538" rel="#L1538">1538</span>
<span id="L1539" rel="#L1539">1539</span>
<span id="L1540" rel="#L1540">1540</span>
<span id="L1541" rel="#L1541">1541</span>
<span id="L1542" rel="#L1542">1542</span>
<span id="L1543" rel="#L1543">1543</span>
<span id="L1544" rel="#L1544">1544</span>
<span id="L1545" rel="#L1545">1545</span>
<span id="L1546" rel="#L1546">1546</span>
<span id="L1547" rel="#L1547">1547</span>
<span id="L1548" rel="#L1548">1548</span>
<span id="L1549" rel="#L1549">1549</span>
<span id="L1550" rel="#L1550">1550</span>
<span id="L1551" rel="#L1551">1551</span>
<span id="L1552" rel="#L1552">1552</span>
<span id="L1553" rel="#L1553">1553</span>
<span id="L1554" rel="#L1554">1554</span>
<span id="L1555" rel="#L1555">1555</span>
<span id="L1556" rel="#L1556">1556</span>
<span id="L1557" rel="#L1557">1557</span>
<span id="L1558" rel="#L1558">1558</span>
<span id="L1559" rel="#L1559">1559</span>
<span id="L1560" rel="#L1560">1560</span>
<span id="L1561" rel="#L1561">1561</span>
<span id="L1562" rel="#L1562">1562</span>
<span id="L1563" rel="#L1563">1563</span>
<span id="L1564" rel="#L1564">1564</span>
<span id="L1565" rel="#L1565">1565</span>
<span id="L1566" rel="#L1566">1566</span>
<span id="L1567" rel="#L1567">1567</span>
<span id="L1568" rel="#L1568">1568</span>
<span id="L1569" rel="#L1569">1569</span>
<span id="L1570" rel="#L1570">1570</span>
<span id="L1571" rel="#L1571">1571</span>
<span id="L1572" rel="#L1572">1572</span>
<span id="L1573" rel="#L1573">1573</span>
<span id="L1574" rel="#L1574">1574</span>
<span id="L1575" rel="#L1575">1575</span>
<span id="L1576" rel="#L1576">1576</span>
<span id="L1577" rel="#L1577">1577</span>
<span id="L1578" rel="#L1578">1578</span>
<span id="L1579" rel="#L1579">1579</span>
<span id="L1580" rel="#L1580">1580</span>
<span id="L1581" rel="#L1581">1581</span>
<span id="L1582" rel="#L1582">1582</span>
<span id="L1583" rel="#L1583">1583</span>
<span id="L1584" rel="#L1584">1584</span>
<span id="L1585" rel="#L1585">1585</span>
<span id="L1586" rel="#L1586">1586</span>
<span id="L1587" rel="#L1587">1587</span>
<span id="L1588" rel="#L1588">1588</span>
<span id="L1589" rel="#L1589">1589</span>
<span id="L1590" rel="#L1590">1590</span>
<span id="L1591" rel="#L1591">1591</span>
<span id="L1592" rel="#L1592">1592</span>
<span id="L1593" rel="#L1593">1593</span>
<span id="L1594" rel="#L1594">1594</span>
<span id="L1595" rel="#L1595">1595</span>
<span id="L1596" rel="#L1596">1596</span>
<span id="L1597" rel="#L1597">1597</span>
<span id="L1598" rel="#L1598">1598</span>
<span id="L1599" rel="#L1599">1599</span>
<span id="L1600" rel="#L1600">1600</span>
<span id="L1601" rel="#L1601">1601</span>
<span id="L1602" rel="#L1602">1602</span>
<span id="L1603" rel="#L1603">1603</span>
<span id="L1604" rel="#L1604">1604</span>
<span id="L1605" rel="#L1605">1605</span>
<span id="L1606" rel="#L1606">1606</span>
<span id="L1607" rel="#L1607">1607</span>
<span id="L1608" rel="#L1608">1608</span>
<span id="L1609" rel="#L1609">1609</span>
<span id="L1610" rel="#L1610">1610</span>
<span id="L1611" rel="#L1611">1611</span>
<span id="L1612" rel="#L1612">1612</span>
<span id="L1613" rel="#L1613">1613</span>
<span id="L1614" rel="#L1614">1614</span>
<span id="L1615" rel="#L1615">1615</span>
<span id="L1616" rel="#L1616">1616</span>
<span id="L1617" rel="#L1617">1617</span>
<span id="L1618" rel="#L1618">1618</span>
<span id="L1619" rel="#L1619">1619</span>
<span id="L1620" rel="#L1620">1620</span>
<span id="L1621" rel="#L1621">1621</span>
<span id="L1622" rel="#L1622">1622</span>
<span id="L1623" rel="#L1623">1623</span>
<span id="L1624" rel="#L1624">1624</span>
<span id="L1625" rel="#L1625">1625</span>
<span id="L1626" rel="#L1626">1626</span>
<span id="L1627" rel="#L1627">1627</span>
<span id="L1628" rel="#L1628">1628</span>
<span id="L1629" rel="#L1629">1629</span>
<span id="L1630" rel="#L1630">1630</span>
<span id="L1631" rel="#L1631">1631</span>
<span id="L1632" rel="#L1632">1632</span>
<span id="L1633" rel="#L1633">1633</span>
<span id="L1634" rel="#L1634">1634</span>
<span id="L1635" rel="#L1635">1635</span>
<span id="L1636" rel="#L1636">1636</span>
<span id="L1637" rel="#L1637">1637</span>
<span id="L1638" rel="#L1638">1638</span>
<span id="L1639" rel="#L1639">1639</span>
<span id="L1640" rel="#L1640">1640</span>
<span id="L1641" rel="#L1641">1641</span>
<span id="L1642" rel="#L1642">1642</span>
<span id="L1643" rel="#L1643">1643</span>
<span id="L1644" rel="#L1644">1644</span>
<span id="L1645" rel="#L1645">1645</span>
<span id="L1646" rel="#L1646">1646</span>
<span id="L1647" rel="#L1647">1647</span>
<span id="L1648" rel="#L1648">1648</span>
<span id="L1649" rel="#L1649">1649</span>
<span id="L1650" rel="#L1650">1650</span>
<span id="L1651" rel="#L1651">1651</span>
<span id="L1652" rel="#L1652">1652</span>
<span id="L1653" rel="#L1653">1653</span>
<span id="L1654" rel="#L1654">1654</span>
<span id="L1655" rel="#L1655">1655</span>
<span id="L1656" rel="#L1656">1656</span>
<span id="L1657" rel="#L1657">1657</span>
<span id="L1658" rel="#L1658">1658</span>
<span id="L1659" rel="#L1659">1659</span>
<span id="L1660" rel="#L1660">1660</span>
<span id="L1661" rel="#L1661">1661</span>
<span id="L1662" rel="#L1662">1662</span>
<span id="L1663" rel="#L1663">1663</span>
<span id="L1664" rel="#L1664">1664</span>
<span id="L1665" rel="#L1665">1665</span>
<span id="L1666" rel="#L1666">1666</span>
<span id="L1667" rel="#L1667">1667</span>
<span id="L1668" rel="#L1668">1668</span>
<span id="L1669" rel="#L1669">1669</span>
<span id="L1670" rel="#L1670">1670</span>
<span id="L1671" rel="#L1671">1671</span>
<span id="L1672" rel="#L1672">1672</span>
<span id="L1673" rel="#L1673">1673</span>
<span id="L1674" rel="#L1674">1674</span>
<span id="L1675" rel="#L1675">1675</span>
<span id="L1676" rel="#L1676">1676</span>
<span id="L1677" rel="#L1677">1677</span>
<span id="L1678" rel="#L1678">1678</span>
<span id="L1679" rel="#L1679">1679</span>
<span id="L1680" rel="#L1680">1680</span>
<span id="L1681" rel="#L1681">1681</span>
<span id="L1682" rel="#L1682">1682</span>
<span id="L1683" rel="#L1683">1683</span>
<span id="L1684" rel="#L1684">1684</span>
<span id="L1685" rel="#L1685">1685</span>
<span id="L1686" rel="#L1686">1686</span>
<span id="L1687" rel="#L1687">1687</span>
<span id="L1688" rel="#L1688">1688</span>
<span id="L1689" rel="#L1689">1689</span>
<span id="L1690" rel="#L1690">1690</span>
<span id="L1691" rel="#L1691">1691</span>
<span id="L1692" rel="#L1692">1692</span>
<span id="L1693" rel="#L1693">1693</span>
<span id="L1694" rel="#L1694">1694</span>
<span id="L1695" rel="#L1695">1695</span>
<span id="L1696" rel="#L1696">1696</span>
<span id="L1697" rel="#L1697">1697</span>
<span id="L1698" rel="#L1698">1698</span>
<span id="L1699" rel="#L1699">1699</span>
<span id="L1700" rel="#L1700">1700</span>
<span id="L1701" rel="#L1701">1701</span>
<span id="L1702" rel="#L1702">1702</span>
<span id="L1703" rel="#L1703">1703</span>
<span id="L1704" rel="#L1704">1704</span>
<span id="L1705" rel="#L1705">1705</span>
<span id="L1706" rel="#L1706">1706</span>
<span id="L1707" rel="#L1707">1707</span>
<span id="L1708" rel="#L1708">1708</span>
<span id="L1709" rel="#L1709">1709</span>
<span id="L1710" rel="#L1710">1710</span>
<span id="L1711" rel="#L1711">1711</span>
<span id="L1712" rel="#L1712">1712</span>
<span id="L1713" rel="#L1713">1713</span>
<span id="L1714" rel="#L1714">1714</span>
<span id="L1715" rel="#L1715">1715</span>
<span id="L1716" rel="#L1716">1716</span>
<span id="L1717" rel="#L1717">1717</span>
<span id="L1718" rel="#L1718">1718</span>
<span id="L1719" rel="#L1719">1719</span>
<span id="L1720" rel="#L1720">1720</span>
<span id="L1721" rel="#L1721">1721</span>
<span id="L1722" rel="#L1722">1722</span>
<span id="L1723" rel="#L1723">1723</span>
<span id="L1724" rel="#L1724">1724</span>
<span id="L1725" rel="#L1725">1725</span>
<span id="L1726" rel="#L1726">1726</span>
<span id="L1727" rel="#L1727">1727</span>
<span id="L1728" rel="#L1728">1728</span>
<span id="L1729" rel="#L1729">1729</span>
<span id="L1730" rel="#L1730">1730</span>
<span id="L1731" rel="#L1731">1731</span>
<span id="L1732" rel="#L1732">1732</span>
<span id="L1733" rel="#L1733">1733</span>
<span id="L1734" rel="#L1734">1734</span>
<span id="L1735" rel="#L1735">1735</span>
<span id="L1736" rel="#L1736">1736</span>
<span id="L1737" rel="#L1737">1737</span>
<span id="L1738" rel="#L1738">1738</span>
<span id="L1739" rel="#L1739">1739</span>
<span id="L1740" rel="#L1740">1740</span>
<span id="L1741" rel="#L1741">1741</span>
<span id="L1742" rel="#L1742">1742</span>
<span id="L1743" rel="#L1743">1743</span>
<span id="L1744" rel="#L1744">1744</span>
<span id="L1745" rel="#L1745">1745</span>
<span id="L1746" rel="#L1746">1746</span>
<span id="L1747" rel="#L1747">1747</span>
<span id="L1748" rel="#L1748">1748</span>
<span id="L1749" rel="#L1749">1749</span>
<span id="L1750" rel="#L1750">1750</span>
<span id="L1751" rel="#L1751">1751</span>
<span id="L1752" rel="#L1752">1752</span>
<span id="L1753" rel="#L1753">1753</span>
<span id="L1754" rel="#L1754">1754</span>
<span id="L1755" rel="#L1755">1755</span>
<span id="L1756" rel="#L1756">1756</span>
<span id="L1757" rel="#L1757">1757</span>
<span id="L1758" rel="#L1758">1758</span>
<span id="L1759" rel="#L1759">1759</span>
<span id="L1760" rel="#L1760">1760</span>
<span id="L1761" rel="#L1761">1761</span>
<span id="L1762" rel="#L1762">1762</span>
<span id="L1763" rel="#L1763">1763</span>
<span id="L1764" rel="#L1764">1764</span>
<span id="L1765" rel="#L1765">1765</span>
<span id="L1766" rel="#L1766">1766</span>
<span id="L1767" rel="#L1767">1767</span>
<span id="L1768" rel="#L1768">1768</span>
<span id="L1769" rel="#L1769">1769</span>
<span id="L1770" rel="#L1770">1770</span>
<span id="L1771" rel="#L1771">1771</span>
<span id="L1772" rel="#L1772">1772</span>
<span id="L1773" rel="#L1773">1773</span>
<span id="L1774" rel="#L1774">1774</span>
<span id="L1775" rel="#L1775">1775</span>
<span id="L1776" rel="#L1776">1776</span>
<span id="L1777" rel="#L1777">1777</span>
<span id="L1778" rel="#L1778">1778</span>
<span id="L1779" rel="#L1779">1779</span>
<span id="L1780" rel="#L1780">1780</span>
<span id="L1781" rel="#L1781">1781</span>
<span id="L1782" rel="#L1782">1782</span>
<span id="L1783" rel="#L1783">1783</span>
<span id="L1784" rel="#L1784">1784</span>
<span id="L1785" rel="#L1785">1785</span>
<span id="L1786" rel="#L1786">1786</span>
<span id="L1787" rel="#L1787">1787</span>
<span id="L1788" rel="#L1788">1788</span>
<span id="L1789" rel="#L1789">1789</span>
<span id="L1790" rel="#L1790">1790</span>
<span id="L1791" rel="#L1791">1791</span>
<span id="L1792" rel="#L1792">1792</span>
<span id="L1793" rel="#L1793">1793</span>
<span id="L1794" rel="#L1794">1794</span>
<span id="L1795" rel="#L1795">1795</span>
<span id="L1796" rel="#L1796">1796</span>
<span id="L1797" rel="#L1797">1797</span>
<span id="L1798" rel="#L1798">1798</span>
<span id="L1799" rel="#L1799">1799</span>
<span id="L1800" rel="#L1800">1800</span>
<span id="L1801" rel="#L1801">1801</span>
<span id="L1802" rel="#L1802">1802</span>
<span id="L1803" rel="#L1803">1803</span>
<span id="L1804" rel="#L1804">1804</span>
<span id="L1805" rel="#L1805">1805</span>
<span id="L1806" rel="#L1806">1806</span>
<span id="L1807" rel="#L1807">1807</span>
<span id="L1808" rel="#L1808">1808</span>
<span id="L1809" rel="#L1809">1809</span>
<span id="L1810" rel="#L1810">1810</span>
<span id="L1811" rel="#L1811">1811</span>
<span id="L1812" rel="#L1812">1812</span>
<span id="L1813" rel="#L1813">1813</span>
<span id="L1814" rel="#L1814">1814</span>
<span id="L1815" rel="#L1815">1815</span>
<span id="L1816" rel="#L1816">1816</span>
<span id="L1817" rel="#L1817">1817</span>
<span id="L1818" rel="#L1818">1818</span>
<span id="L1819" rel="#L1819">1819</span>
<span id="L1820" rel="#L1820">1820</span>
<span id="L1821" rel="#L1821">1821</span>
<span id="L1822" rel="#L1822">1822</span>
<span id="L1823" rel="#L1823">1823</span>
<span id="L1824" rel="#L1824">1824</span>
<span id="L1825" rel="#L1825">1825</span>
<span id="L1826" rel="#L1826">1826</span>
<span id="L1827" rel="#L1827">1827</span>
<span id="L1828" rel="#L1828">1828</span>
<span id="L1829" rel="#L1829">1829</span>
<span id="L1830" rel="#L1830">1830</span>
<span id="L1831" rel="#L1831">1831</span>
<span id="L1832" rel="#L1832">1832</span>
<span id="L1833" rel="#L1833">1833</span>
<span id="L1834" rel="#L1834">1834</span>
<span id="L1835" rel="#L1835">1835</span>
<span id="L1836" rel="#L1836">1836</span>
<span id="L1837" rel="#L1837">1837</span>
<span id="L1838" rel="#L1838">1838</span>
<span id="L1839" rel="#L1839">1839</span>
<span id="L1840" rel="#L1840">1840</span>
<span id="L1841" rel="#L1841">1841</span>
<span id="L1842" rel="#L1842">1842</span>
<span id="L1843" rel="#L1843">1843</span>
<span id="L1844" rel="#L1844">1844</span>
<span id="L1845" rel="#L1845">1845</span>
<span id="L1846" rel="#L1846">1846</span>
<span id="L1847" rel="#L1847">1847</span>
<span id="L1848" rel="#L1848">1848</span>
<span id="L1849" rel="#L1849">1849</span>
<span id="L1850" rel="#L1850">1850</span>
<span id="L1851" rel="#L1851">1851</span>
<span id="L1852" rel="#L1852">1852</span>
<span id="L1853" rel="#L1853">1853</span>
<span id="L1854" rel="#L1854">1854</span>
<span id="L1855" rel="#L1855">1855</span>
<span id="L1856" rel="#L1856">1856</span>
<span id="L1857" rel="#L1857">1857</span>
<span id="L1858" rel="#L1858">1858</span>
<span id="L1859" rel="#L1859">1859</span>
<span id="L1860" rel="#L1860">1860</span>
<span id="L1861" rel="#L1861">1861</span>
<span id="L1862" rel="#L1862">1862</span>
<span id="L1863" rel="#L1863">1863</span>
<span id="L1864" rel="#L1864">1864</span>
<span id="L1865" rel="#L1865">1865</span>
<span id="L1866" rel="#L1866">1866</span>
<span id="L1867" rel="#L1867">1867</span>
<span id="L1868" rel="#L1868">1868</span>
<span id="L1869" rel="#L1869">1869</span>
<span id="L1870" rel="#L1870">1870</span>
<span id="L1871" rel="#L1871">1871</span>
<span id="L1872" rel="#L1872">1872</span>
<span id="L1873" rel="#L1873">1873</span>
<span id="L1874" rel="#L1874">1874</span>
<span id="L1875" rel="#L1875">1875</span>
<span id="L1876" rel="#L1876">1876</span>
<span id="L1877" rel="#L1877">1877</span>
<span id="L1878" rel="#L1878">1878</span>
<span id="L1879" rel="#L1879">1879</span>
<span id="L1880" rel="#L1880">1880</span>
<span id="L1881" rel="#L1881">1881</span>
<span id="L1882" rel="#L1882">1882</span>
<span id="L1883" rel="#L1883">1883</span>
<span id="L1884" rel="#L1884">1884</span>
<span id="L1885" rel="#L1885">1885</span>
<span id="L1886" rel="#L1886">1886</span>
<span id="L1887" rel="#L1887">1887</span>
<span id="L1888" rel="#L1888">1888</span>
<span id="L1889" rel="#L1889">1889</span>
<span id="L1890" rel="#L1890">1890</span>
<span id="L1891" rel="#L1891">1891</span>
<span id="L1892" rel="#L1892">1892</span>
<span id="L1893" rel="#L1893">1893</span>
<span id="L1894" rel="#L1894">1894</span>
<span id="L1895" rel="#L1895">1895</span>
<span id="L1896" rel="#L1896">1896</span>
<span id="L1897" rel="#L1897">1897</span>
<span id="L1898" rel="#L1898">1898</span>
<span id="L1899" rel="#L1899">1899</span>
<span id="L1900" rel="#L1900">1900</span>
<span id="L1901" rel="#L1901">1901</span>
<span id="L1902" rel="#L1902">1902</span>
<span id="L1903" rel="#L1903">1903</span>
<span id="L1904" rel="#L1904">1904</span>
<span id="L1905" rel="#L1905">1905</span>
<span id="L1906" rel="#L1906">1906</span>
<span id="L1907" rel="#L1907">1907</span>
<span id="L1908" rel="#L1908">1908</span>
<span id="L1909" rel="#L1909">1909</span>
<span id="L1910" rel="#L1910">1910</span>
<span id="L1911" rel="#L1911">1911</span>
<span id="L1912" rel="#L1912">1912</span>
<span id="L1913" rel="#L1913">1913</span>
<span id="L1914" rel="#L1914">1914</span>
<span id="L1915" rel="#L1915">1915</span>
<span id="L1916" rel="#L1916">1916</span>
<span id="L1917" rel="#L1917">1917</span>
<span id="L1918" rel="#L1918">1918</span>
<span id="L1919" rel="#L1919">1919</span>
<span id="L1920" rel="#L1920">1920</span>
<span id="L1921" rel="#L1921">1921</span>
<span id="L1922" rel="#L1922">1922</span>
<span id="L1923" rel="#L1923">1923</span>
<span id="L1924" rel="#L1924">1924</span>
<span id="L1925" rel="#L1925">1925</span>
<span id="L1926" rel="#L1926">1926</span>
<span id="L1927" rel="#L1927">1927</span>
<span id="L1928" rel="#L1928">1928</span>
<span id="L1929" rel="#L1929">1929</span>
<span id="L1930" rel="#L1930">1930</span>
<span id="L1931" rel="#L1931">1931</span>
<span id="L1932" rel="#L1932">1932</span>
<span id="L1933" rel="#L1933">1933</span>
<span id="L1934" rel="#L1934">1934</span>
<span id="L1935" rel="#L1935">1935</span>
<span id="L1936" rel="#L1936">1936</span>
<span id="L1937" rel="#L1937">1937</span>
<span id="L1938" rel="#L1938">1938</span>
<span id="L1939" rel="#L1939">1939</span>
<span id="L1940" rel="#L1940">1940</span>
<span id="L1941" rel="#L1941">1941</span>
<span id="L1942" rel="#L1942">1942</span>
<span id="L1943" rel="#L1943">1943</span>
<span id="L1944" rel="#L1944">1944</span>
<span id="L1945" rel="#L1945">1945</span>
<span id="L1946" rel="#L1946">1946</span>
<span id="L1947" rel="#L1947">1947</span>
<span id="L1948" rel="#L1948">1948</span>
<span id="L1949" rel="#L1949">1949</span>
<span id="L1950" rel="#L1950">1950</span>
<span id="L1951" rel="#L1951">1951</span>
<span id="L1952" rel="#L1952">1952</span>
<span id="L1953" rel="#L1953">1953</span>
<span id="L1954" rel="#L1954">1954</span>
<span id="L1955" rel="#L1955">1955</span>
<span id="L1956" rel="#L1956">1956</span>
<span id="L1957" rel="#L1957">1957</span>
<span id="L1958" rel="#L1958">1958</span>
<span id="L1959" rel="#L1959">1959</span>
<span id="L1960" rel="#L1960">1960</span>
<span id="L1961" rel="#L1961">1961</span>
<span id="L1962" rel="#L1962">1962</span>
<span id="L1963" rel="#L1963">1963</span>
<span id="L1964" rel="#L1964">1964</span>
<span id="L1965" rel="#L1965">1965</span>
<span id="L1966" rel="#L1966">1966</span>
<span id="L1967" rel="#L1967">1967</span>
<span id="L1968" rel="#L1968">1968</span>
<span id="L1969" rel="#L1969">1969</span>
<span id="L1970" rel="#L1970">1970</span>
<span id="L1971" rel="#L1971">1971</span>
<span id="L1972" rel="#L1972">1972</span>
<span id="L1973" rel="#L1973">1973</span>
<span id="L1974" rel="#L1974">1974</span>
<span id="L1975" rel="#L1975">1975</span>
<span id="L1976" rel="#L1976">1976</span>
<span id="L1977" rel="#L1977">1977</span>
<span id="L1978" rel="#L1978">1978</span>
<span id="L1979" rel="#L1979">1979</span>
<span id="L1980" rel="#L1980">1980</span>
<span id="L1981" rel="#L1981">1981</span>
<span id="L1982" rel="#L1982">1982</span>
<span id="L1983" rel="#L1983">1983</span>
<span id="L1984" rel="#L1984">1984</span>
<span id="L1985" rel="#L1985">1985</span>
<span id="L1986" rel="#L1986">1986</span>
<span id="L1987" rel="#L1987">1987</span>
<span id="L1988" rel="#L1988">1988</span>
<span id="L1989" rel="#L1989">1989</span>
<span id="L1990" rel="#L1990">1990</span>
<span id="L1991" rel="#L1991">1991</span>
<span id="L1992" rel="#L1992">1992</span>
<span id="L1993" rel="#L1993">1993</span>
<span id="L1994" rel="#L1994">1994</span>
<span id="L1995" rel="#L1995">1995</span>
<span id="L1996" rel="#L1996">1996</span>
<span id="L1997" rel="#L1997">1997</span>
<span id="L1998" rel="#L1998">1998</span>
<span id="L1999" rel="#L1999">1999</span>
<span id="L2000" rel="#L2000">2000</span>
<span id="L2001" rel="#L2001">2001</span>
<span id="L2002" rel="#L2002">2002</span>
<span id="L2003" rel="#L2003">2003</span>
<span id="L2004" rel="#L2004">2004</span>
<span id="L2005" rel="#L2005">2005</span>
<span id="L2006" rel="#L2006">2006</span>
<span id="L2007" rel="#L2007">2007</span>
<span id="L2008" rel="#L2008">2008</span>
<span id="L2009" rel="#L2009">2009</span>
<span id="L2010" rel="#L2010">2010</span>
<span id="L2011" rel="#L2011">2011</span>
<span id="L2012" rel="#L2012">2012</span>
<span id="L2013" rel="#L2013">2013</span>
<span id="L2014" rel="#L2014">2014</span>
<span id="L2015" rel="#L2015">2015</span>
<span id="L2016" rel="#L2016">2016</span>
<span id="L2017" rel="#L2017">2017</span>
<span id="L2018" rel="#L2018">2018</span>
<span id="L2019" rel="#L2019">2019</span>
<span id="L2020" rel="#L2020">2020</span>
<span id="L2021" rel="#L2021">2021</span>
<span id="L2022" rel="#L2022">2022</span>
<span id="L2023" rel="#L2023">2023</span>
<span id="L2024" rel="#L2024">2024</span>
<span id="L2025" rel="#L2025">2025</span>
<span id="L2026" rel="#L2026">2026</span>
<span id="L2027" rel="#L2027">2027</span>
<span id="L2028" rel="#L2028">2028</span>
<span id="L2029" rel="#L2029">2029</span>
<span id="L2030" rel="#L2030">2030</span>
<span id="L2031" rel="#L2031">2031</span>
<span id="L2032" rel="#L2032">2032</span>
<span id="L2033" rel="#L2033">2033</span>
<span id="L2034" rel="#L2034">2034</span>
<span id="L2035" rel="#L2035">2035</span>
<span id="L2036" rel="#L2036">2036</span>
<span id="L2037" rel="#L2037">2037</span>
<span id="L2038" rel="#L2038">2038</span>
<span id="L2039" rel="#L2039">2039</span>
<span id="L2040" rel="#L2040">2040</span>
<span id="L2041" rel="#L2041">2041</span>
<span id="L2042" rel="#L2042">2042</span>
<span id="L2043" rel="#L2043">2043</span>
<span id="L2044" rel="#L2044">2044</span>
<span id="L2045" rel="#L2045">2045</span>
<span id="L2046" rel="#L2046">2046</span>
<span id="L2047" rel="#L2047">2047</span>
<span id="L2048" rel="#L2048">2048</span>
<span id="L2049" rel="#L2049">2049</span>
<span id="L2050" rel="#L2050">2050</span>
<span id="L2051" rel="#L2051">2051</span>
<span id="L2052" rel="#L2052">2052</span>
<span id="L2053" rel="#L2053">2053</span>
<span id="L2054" rel="#L2054">2054</span>
<span id="L2055" rel="#L2055">2055</span>
<span id="L2056" rel="#L2056">2056</span>
<span id="L2057" rel="#L2057">2057</span>
<span id="L2058" rel="#L2058">2058</span>
<span id="L2059" rel="#L2059">2059</span>
<span id="L2060" rel="#L2060">2060</span>
<span id="L2061" rel="#L2061">2061</span>
<span id="L2062" rel="#L2062">2062</span>
<span id="L2063" rel="#L2063">2063</span>
<span id="L2064" rel="#L2064">2064</span>
<span id="L2065" rel="#L2065">2065</span>
<span id="L2066" rel="#L2066">2066</span>
<span id="L2067" rel="#L2067">2067</span>
<span id="L2068" rel="#L2068">2068</span>
<span id="L2069" rel="#L2069">2069</span>
<span id="L2070" rel="#L2070">2070</span>
<span id="L2071" rel="#L2071">2071</span>
<span id="L2072" rel="#L2072">2072</span>
<span id="L2073" rel="#L2073">2073</span>
<span id="L2074" rel="#L2074">2074</span>
<span id="L2075" rel="#L2075">2075</span>
<span id="L2076" rel="#L2076">2076</span>
<span id="L2077" rel="#L2077">2077</span>
<span id="L2078" rel="#L2078">2078</span>
<span id="L2079" rel="#L2079">2079</span>
<span id="L2080" rel="#L2080">2080</span>
<span id="L2081" rel="#L2081">2081</span>
<span id="L2082" rel="#L2082">2082</span>
<span id="L2083" rel="#L2083">2083</span>
<span id="L2084" rel="#L2084">2084</span>
<span id="L2085" rel="#L2085">2085</span>
<span id="L2086" rel="#L2086">2086</span>
<span id="L2087" rel="#L2087">2087</span>
<span id="L2088" rel="#L2088">2088</span>
<span id="L2089" rel="#L2089">2089</span>
<span id="L2090" rel="#L2090">2090</span>
<span id="L2091" rel="#L2091">2091</span>
<span id="L2092" rel="#L2092">2092</span>
<span id="L2093" rel="#L2093">2093</span>
<span id="L2094" rel="#L2094">2094</span>
<span id="L2095" rel="#L2095">2095</span>
<span id="L2096" rel="#L2096">2096</span>
<span id="L2097" rel="#L2097">2097</span>
<span id="L2098" rel="#L2098">2098</span>
<span id="L2099" rel="#L2099">2099</span>
<span id="L2100" rel="#L2100">2100</span>
<span id="L2101" rel="#L2101">2101</span>
<span id="L2102" rel="#L2102">2102</span>
<span id="L2103" rel="#L2103">2103</span>
<span id="L2104" rel="#L2104">2104</span>
<span id="L2105" rel="#L2105">2105</span>
<span id="L2106" rel="#L2106">2106</span>
<span id="L2107" rel="#L2107">2107</span>
<span id="L2108" rel="#L2108">2108</span>
<span id="L2109" rel="#L2109">2109</span>
<span id="L2110" rel="#L2110">2110</span>
<span id="L2111" rel="#L2111">2111</span>
<span id="L2112" rel="#L2112">2112</span>
<span id="L2113" rel="#L2113">2113</span>
<span id="L2114" rel="#L2114">2114</span>
<span id="L2115" rel="#L2115">2115</span>
<span id="L2116" rel="#L2116">2116</span>
<span id="L2117" rel="#L2117">2117</span>
<span id="L2118" rel="#L2118">2118</span>
<span id="L2119" rel="#L2119">2119</span>
<span id="L2120" rel="#L2120">2120</span>
<span id="L2121" rel="#L2121">2121</span>
<span id="L2122" rel="#L2122">2122</span>
<span id="L2123" rel="#L2123">2123</span>
<span id="L2124" rel="#L2124">2124</span>
<span id="L2125" rel="#L2125">2125</span>
<span id="L2126" rel="#L2126">2126</span>
<span id="L2127" rel="#L2127">2127</span>
<span id="L2128" rel="#L2128">2128</span>
<span id="L2129" rel="#L2129">2129</span>
<span id="L2130" rel="#L2130">2130</span>
<span id="L2131" rel="#L2131">2131</span>
<span id="L2132" rel="#L2132">2132</span>
<span id="L2133" rel="#L2133">2133</span>
<span id="L2134" rel="#L2134">2134</span>
<span id="L2135" rel="#L2135">2135</span>
<span id="L2136" rel="#L2136">2136</span>
<span id="L2137" rel="#L2137">2137</span>
<span id="L2138" rel="#L2138">2138</span>
<span id="L2139" rel="#L2139">2139</span>
<span id="L2140" rel="#L2140">2140</span>
<span id="L2141" rel="#L2141">2141</span>
<span id="L2142" rel="#L2142">2142</span>
<span id="L2143" rel="#L2143">2143</span>
<span id="L2144" rel="#L2144">2144</span>
<span id="L2145" rel="#L2145">2145</span>
<span id="L2146" rel="#L2146">2146</span>
<span id="L2147" rel="#L2147">2147</span>
<span id="L2148" rel="#L2148">2148</span>
<span id="L2149" rel="#L2149">2149</span>
<span id="L2150" rel="#L2150">2150</span>
<span id="L2151" rel="#L2151">2151</span>
<span id="L2152" rel="#L2152">2152</span>
<span id="L2153" rel="#L2153">2153</span>
<span id="L2154" rel="#L2154">2154</span>
<span id="L2155" rel="#L2155">2155</span>
<span id="L2156" rel="#L2156">2156</span>
<span id="L2157" rel="#L2157">2157</span>
<span id="L2158" rel="#L2158">2158</span>
<span id="L2159" rel="#L2159">2159</span>
<span id="L2160" rel="#L2160">2160</span>
<span id="L2161" rel="#L2161">2161</span>
<span id="L2162" rel="#L2162">2162</span>
<span id="L2163" rel="#L2163">2163</span>
<span id="L2164" rel="#L2164">2164</span>
<span id="L2165" rel="#L2165">2165</span>
<span id="L2166" rel="#L2166">2166</span>
<span id="L2167" rel="#L2167">2167</span>
<span id="L2168" rel="#L2168">2168</span>
<span id="L2169" rel="#L2169">2169</span>
<span id="L2170" rel="#L2170">2170</span>
<span id="L2171" rel="#L2171">2171</span>
<span id="L2172" rel="#L2172">2172</span>
<span id="L2173" rel="#L2173">2173</span>

           </td>
         </tr>
       </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.06245s from github-fe124-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-8c6e10f6700610e693b29e274318b3714523ca3e.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-d3e5a921851390e3c53eb2533fbaa6ce3fbb639a.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>
