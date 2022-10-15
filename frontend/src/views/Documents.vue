<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card mb-4">
          <div class="card-header pb-0">
            <h6>เอกสารที่เกี่ยวข้อง</h6>
          </div>
          <div class="card-body px-0 pt-0 pb-2">
            <div class="table-responsive p-0">
              <table class="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Name
                    </th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                      Type
                    </th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                      Size
                    </th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                      Date
                    </th>
                    <th class="text-secondary opacity-7"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <i class="far fa-file-alt text-lg ms-1 me-4"
                          aria-hidden="true"></i>
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">ใบคำร้องขอสหกิจศึกษา</h6>
                        </div>
                      </div>
                    </td>
                    <td class="text-sm">
                      <soft-badge color="info" variant="gradient" size="sm">PDF</soft-badge>
                    </td>
                    <td>
                      <p class="text-secondary text-xs font-weight-bold mb-0">10MB</p>
                    </td>
                    <td>
                      <span class="text-secondary text-xs font-weight-bold">12/10/22</span>
                    </td>
                    <td class="align-middle">
                      <soft-button href="javascript:;" color="success" variant="gradient" size="sm">
                        Download
                      </soft-button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <i class="far fa-file-alt text-lg ms-1 me-4"
                          aria-hidden="true"></i>
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">ใบลาออก</h6>
                        </div>
                      </div>
                    </td>
                    <td class="text-sm">
                      <soft-badge color="info" variant="gradient" size="sm">PDF</soft-badge>
                    </td>
                    <td>
                      <p class="text-secondary text-xs font-weight-bold mb-0">6MB</p>
                    </td>
                    <td>
                      <span class="text-secondary text-xs font-weight-bold">20/01/21</span>
                    </td>
                    <td class="align-middle">
                      <soft-button href="javascript:;" color="success" variant="gradient" size="sm">
                        Download
                      </soft-button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <i class="far fa-file-alt text-lg ms-1 me-4"
                          aria-hidden="true"></i>
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">ใบลาพักการเรียน</h6>
                        </div>
                      </div>
                    </td>
                    <td class="text-sm">
                      <soft-badge color="info" variant="gradient" size="sm">DOC</soft-badge>
                    </td>
                    <td>
                      <p class="text-secondary text-xs font-weight-bold mb-0">8MB</p>
                    </td>
                    <td>
                      <span class="text-secondary text-xs font-weight-bold">24/04/20</span>
                    </td>
                    <td class="align-middle">
                      <soft-button href="javascript:;" color="success" variant="gradient" size="sm">
                        Download
                      </soft-button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SoftBadge from "@/components/SoftBadge.vue";
import SoftButton from "../components/SoftButton.vue";

export default {
  name: "Documents",
  data() {
    return {

    };
  },
  components: {
    SoftBadge,
    SoftButton,
},
};
</script>
