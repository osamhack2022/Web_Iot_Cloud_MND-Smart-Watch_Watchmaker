<!-- 인원 관리 시스템의 병사 근무 현황 vue-->
<template>
  <div class="card">
    <div class="card-header pb-0">
      <h6>병사 근무 현황</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">병사</th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >계급</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >근무현황</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >현위치</th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <img
                      src="../../assets/img/team-2.jpg"
                      class="avatar avatar-sm me-3"
                      alt="user1"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{users[0].name}}</h6>
                    <p class="text-xs text-secondary mb-0">{{users[0].number}}</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">{{users[0].rank}}</p>
                <p class="text-xs text-secondary mb-0"></p>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-success">{{users[0].working}}</span>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{users[0].location}}</span>
                <p class="text-xs text-secondary mb-0">22/10/18 17:57:08</p>
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                >관리</a>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <img
                      src="../../assets/img/team-3.jpg"
                      class="avatar avatar-sm me-3"
                      alt="user2"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">윤지성</h6>
                    <p class="text-xs text-secondary mb-0">21-70001111</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">병장</p>
                <p class="text-xs text-secondary mb-0"></p>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-secondary">근무Off</span>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">22/10/18</span>
                <p class="text-xs text-secondary mb-0">08:01:00</p>
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                >관리</a>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <img
                      src="../../assets/img/team-4.jpg"
                      class="avatar avatar-sm me-3"
                      alt="user3"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">박원</h6>
                    <p class="text-xs text-secondary mb-0">22-70001112</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">일병</p>
                <p class="text-xs text-secondary mb-0"></p>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-success">근무On</span>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">22/10/18</span>
                <p class="text-xs text-secondary mb-0">17:59:07</p>
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                >관리</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "authors-table"

   
  ,
  
  created () {     //문제는 이 안에 있음..  
      /*
    this.$http.get('/api/users') //여기로 접속하면 데이터가 나오긴 함
        .then((response) => {
          this.users = response.data
        })
      */
        /*
    axios.get('/api/users') 
      .then( ((response) => {
          this.users = response.data
        } ) )
        */
        //this.$http.get('/api/users')
  }
  

  ,
  data(){
    return{
      users: [{"name":"최수호","rank":"병장","number":"21-70006804","working":"근무On","location":"AAOC","heartrate":108},
        {"name":"윤지성","rank":"병장","number":"21-70012345","working":"근무Off","location":"생활관","heartrate":82},
        {"name":"박원","rank":"일병","number":"22-70007066","working":"근무On","location":"AAOC","heartrate":147,"source": "front"}]
    }
  },

  
};
</script>
