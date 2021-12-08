<template>
  <header>
      <div class="wrapper">
          <router-link class="logotype" to='/list-calculator'>
              КАЛЬКРУ
          </router-link>
          <div class="menu">
              <router-link class="menu__item" to="/list-calculator">
                  Все калькуляторы
              </router-link>
          </div>
          <div class="sign">
              <p>Авторизация/регистрация</p>
          </div>
      </div>
  </header>
</template>

<style lang="scss" scoped>
header{
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 5px 15px rgb(0, 0, 0, .3);
    padding: 25px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .wrapper{
        width: 1600px;
        display: flex;
        align-items: center;
        @media screen and (max-width: 1640px) {
            padding: 0 40px;
        }
        .logotype{
            font-size: 32px;
            font-weight: bold;
            cursor: pointer;
            padding-bottom: 3px;
        }
        .menu{
            display: flex;
            align-items: center;
            margin-left: 100px;
            &__item{
                font-size: 22px;
                transition-duration: .3s;
                border-bottom: 3px solid transparent;
                padding-bottom: 3px;
                cursor: pointer;
                &:not(:first-of-type){
                    margin-left: 40px;
                }
                &:hover{
                    border-bottom: 3px solid #f3c864;
                }
            }
            .router-link-active{
                border-bottom: 3px solid #f3c864;
            }
        }
        .sign{
            font-size: 22px;
            margin-left: auto;
            transition-duration: .3s;
            border-bottom: 3px solid transparent;
            padding-bottom: 3px;
            cursor: pointer;
            &:hover{
                border-bottom: 3px solid #f3c864;
            }
        }
    }
}
</style>

<script>

export default {
  name: 'Header',
}
</script>
