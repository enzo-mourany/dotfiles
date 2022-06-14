<h1 align="center">
<img src="./header.svg">
</h1>

[Shell](#shell-setup)

[VSCode Terminal](#vscode-terminal)

[Hyper](#hyper)

[Nvim](#nvim)

[LunarVim](#lunarvim)

<br />

# Shell setup

## Install brew (macos)

[Brew](https://brew.sh/index_fr) is a package manager for macos

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Install fish

```sh
brew install fish
```

## Install fisher

```sh
brew install fisher
```

## Install iTerm

If you are using basic terminal on your mac you should install iTerm which is better built and looks better

```sh
brew install --cask iterm2
```

## Install oh-my-zsh

To get this render

<img src="./images/oh-my-zsh.png" width="60%"/>

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

## Install powerlevel10k

Clone this repository to use powerlevel10k and get a better render. If git is not already installed, go to this [page](https://github.com/git-guides/install-git)

```sh
git clone https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k
```

Now open `~/.zshrc` and set `ZSH_THEME="powerlevel10k/`powerlevel10k"`

Quit iTerm and relaunch it

A special page will appear and you will have to select proposals to configure powerlevel10k

More info on [powerlevel10k](https://github.com/romkatv/powerlevel10k) github page

Finally quit et relaunch iTerm again and see the result

If you want to edit the configuration :

```sh
p10k configure
```

You can also edit the code on `~/.p10k.zsh`

## Install Plugins

### Syntax Highlighting

```sh
brew install zsh-syntax-highlighting
```

Enable the syntax highlighting :

```sh
source ./zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```

# VSCode Terminal

After configuring oh-my-zsh, VSCode's terminal does not support powerlevel10k icons. So you have to go to vscode settings

Go to `Settings` and search `terminal font` and change the value to `MesloLGS NF`

<img src=".images/../images/vscode-terminal-font.png" width="60%"/>

# Hyper

<img src="./images/hyper.png"/>

<img src="./images/hyper-fig.png"/>

## Install (brew)

```sh
brew install --cask hyper
```

## Install Hyper Command (zsh)

```sh
sudo ln -s &#34;/Applications/Hyper.app/Contents/Resources/bin/hyper&#34; /usr/local/bin/hyper
```

## Change font family

```sh
code ~/.hyper.js
```

or

```sh
vim ~/.hyper.js
```

Use this parameter

<img src="./images/hyper-font-family.png" width="60%"/>

<br/>

## Night Owl Theme

```sh
hyper i hyper-night-owl
```

## Install Fig (brew)

<img src="./images/fig.png" width="60%"/>

```sh
brew install --cask fig
```

Setup Fig

Restart Hyper

<br />

## Set low opacity

<img src="./images/hyper-low-opacity.png" width="80%"/>

```sh
hyper i hyper-opacity
```

Change opacity in .hyper.js

<img src="./images/opacity.png" width="60%"/>

<br/>

## Install Plugins

Go to this [link](https://github.com/bnb/awesome-hyper.git) to see and install some plugins

<br />

# NeoVim

## Installation

```
brew install neovim
```

To config Neovim you have to go to `~/.config/nvim` on MacOS

## LunarVim

<img src="./images/lunarVim.png" width="70%"/>

<br />

For several months I used a Neovim config that I had created especially for web and mobile development. I recently switched to LunarVim which allows me to have additional features and better rendering

## Prerequisites

- ### Install lua

```
brew install lua
```

- ### Install cargo

```
curl https://sh.rustup.rs -sSf | sh
```

## Installation (MacOS)

```
bash <(curl -s https://raw.githubusercontent.com/lunarvim/lunarvim/master/utils/installer/install.sh)
```

To config Neovim you have to go to `~/.config/lvim` and `~/.local/share/lunarvim` on MacOS

Edit `.zshrc` and add `PATH=$PATH:~/.local/bin`

Now enter `lvim`to open lunarVim

<img src="./images/lunarVim-react.png" width="70%"/>
<img src="./images/lunarVim-terminal.png" width="70%"/>
<img src="./images/lunarVim-telescope.png" width="70%"/>
<img src="./images/lunarVim-terminal.png" width="70%"/>
<img src="./images/lunarVim-split-window.png" width="70%"/>
<img src="./images/lunarVim-file-explorer.png" width="70%"/>

<br />

## Author

👤 **Enzo Mourany**

- Website: enzomourany.com
- Github: [@enzo-mourany](https://github.com/enzo-mourany)

## Show your support

Give a ⭐️ if this project helped you!
