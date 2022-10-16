<template>
    <div class="py-4 container-fluid">
        <div class="column">
            <div class="col-12">
                <div class="card mb-4">
                    <div>
                        <h5 class="text-center mb-0 mt-3">ใบคำร้องขอสหกิจศึกษาในสถานประกอบการ</h5>
                        <h6 class="text-center">ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ กำแพงแสน
                            มหาวิทยาลัยเกษตรศาสตร์</h6>
                        <hr>
                    </div>
                    <div class="text-center text-sm p-1 mb-3"
                        style="border: 1px solid #04AA6D; width:80%; align-self: center;">
                        หมายเหตุ : การฝึกงาน หลักสูตรนี้กำหนดให้นิสิตที่จะฝึกงานได้จะต้องเรียนให้ผ่านในรายวิชา 02204XXX
                        รวมแล้วไม่ต่ำกว่า 35 หน่วยกิต
                        หรือให้อยู่ในดุลพินิจของคณาจารย์ประจำหลักสูตร นิสิตจะฝึกงานกับหน่วยงานที่รับนิสิตเข้าฝึกงาน
                        ไม่ว่าจะเป็นหน่วยงานของรัฐ เอกชน
                        หรือรัฐวิสาหกิจ ทั้งภายในและภายนอกประเทศ ซึ่งนิสิตจะต้องเข้ารับการฝึกงานอย่างน้อย 240 ชั่วโมง
                        และไม่น้อยกว่า 30 วันทำการ เมื่อ
                        เสร็จสิ้นการฝึกงาน นิสิตจะต้องส่งรายงานฝึกงานและแบบประเมินผลจากหน่วยงาน
                        เสนอต่อหน่วยงานฝึกงานภาควิชาวิศวกรรมคอมพิวเตอร์
                        และคณะวิศวกรรมศาสตร์ กำแพงแสน
                    </div>
                    <div style="width:90%; align-self:center;">
                        <h6 class="float-lg-start">ข้อมูลนิสิต</h6><br>
                        <hr>
                        <div class="row-cols-3 d-flex justify-content-between">
                            <div class="w-25">
                                <soft-checkbox class="mb-0">นาย</soft-checkbox>
                                <soft-checkbox>นางสาว</soft-checkbox>
                            </div>
                            <div>
                                <div class="text-sm text-bold text-dark ">ชื่อ</div>
                                <soft-input placeholder="กรุณากรอกชื่อ ..." size="sm"></soft-input>
                            </div>
                            <div>
                                <div class="text-sm text-bold text-dark ">นามสกุล</div>
                                <soft-input placeholder="กรุณากรอกนามสกุล ..." size="sm"></soft-input>
                            </div>
                        </div>
                        <div class="row-cols-3 d-flex justify-content-between">
                            <div class="w-25">
                                <div class="text-sm text-bold text-dark ">รหัสนิสิต</div>
                                <soft-input placeholder="กรุณากรอกรหัสนิสิต ..." size="sm"></soft-input>
                            </div>
                            <div>
                                <div class="text-sm text-bold text-dark ">ชื่อ Facebook</div>
                                <soft-input placeholder="กรุณากรอกชื่อบัญชี Facebook ..." size="sm"></soft-input>
                            </div>
                            <div>
                                <div class="text-sm text-bold text-dark ">เบอร์โทรศัพท์มือถือ</div>
                                <soft-input placeholder="กรุณากรอกเบอร์มือถือ ..." size="sm"></soft-input>
                            </div>
                        </div>
                        <div class="row-cols-3 d-flex justify-content-between mb-5">
                            <div class="w-25">
                                <div class="text-sm text-bold text-dark ">ประเภทใบคำร้อง</div>
                                <soft-checkbox class="mb-0">ฝึกงาน</soft-checkbox>
                                <soft-checkbox>สหกิจศึกษา</soft-checkbox>
                            </div>
                            <div>
                                <div class="text-sm text-bold text-dark ">วันที่เขียนคำร้อง</div>
                                <soft-input type="date" size="sm"></soft-input>
                            </div>
                            <div>
                                <div class="text-sm text-bold text-dark ">อัปโหลดไฟล์คำร้อง</div>
                                <soft-input type="file" size="sm"></soft-input>
                            </div>
                        </div>

                        <h6 class="float-lg-start">ข้อมูลสถานประกอบการ</h6><br>
                        <hr>
                        <div>
                            <div class="text-sm text-bold text-dark ">ชื่อสถานประกอบการ</div>
                            <soft-input placeholder="กรุณากรอกชื่อสถานประการ ..." size="sm"></soft-input>
                        </div>
                        <div>
                            <div class="text-sm text-bold text-dark ">สถานที่ตั้ง</div>
                            <soft-input placeholder="รายละเอียดสถานที่ตั้ง เช่น เลขที่ ถนน ซอย" size="lg"></soft-input>
                        </div>
                        <div class="row-cols-3 d-flex justify-content-between">
                            <div class="w-25">
                                <div class="text-sm text-bold text-dark ">ตำบล / แขวง</div>
                                <soft-input type="text" placeholder="กรุณากรอกตำบล ..." size="sm"></soft-input>
                            </div>
                            <div>
                                <div class="text-sm text-bold text-dark ">อำเภอ / เขต</div>
                                <soft-input type="text" placeholder="กรุณากรอกอำเภอ ..." size="sm"></soft-input>
                            </div>
                            <div>
                                <div class="text-sm text-bold text-dark ">จังหวัด</div>
                                <soft-input type="text" placeholder="กรุณากรอกจังหวัด ..." size="sm"></soft-input>
                            </div>
                        </div>
                        <div class="mb-5">
                            <div class="text-sm text-bold text-dark ">ตำแหน่งที่ไปฝึกงาน / สหกิจศึกษา</div>
                            <soft-input placeholder="กรุณากรอกตำแหน่ง ..." size="sm"></soft-input>
                        </div>

                        <h6 class="float-lg-start">รายละเอียดของผู้ที่จะให้ภาควิชาฯ ออกหนังสือขอความอนุเคราะห์ฝึกงาน/สหกิจ</h6><br>
                        <hr>
                        <div class="row-cols-2 d-flex justify-content-between">
                            <div class="w-45">
                                <div class="text-sm text-bold text-dark ">ชื่อ-นามสกุล</div>
                                <soft-input type="text" placeholder="กรุณากรอกชื่อ นามสกุล ..." size="sm"></soft-input>
                            </div>
                            <div class="w-45">
                                <div class="text-sm text-bold text-dark ">ตำแหน่ง</div>
                                <soft-input type="text" placeholder="กรุณากรอกตำแหน่ง ..." size="sm"></soft-input>
                            </div>
                        </div>
                        <hr style="width: 90%; margin-left: auto; margin-right: auto;">
                        <div class="row-cols-3 d-flex justify-content-between">
                            <div class="w-25">
                                <div class="text-sm text-bold text-dark ">ชื่อ-นามสกุลผู้ประสานงาน</div>
                                <soft-input type="text" placeholder="กรุณากรอกชื่อ นามสกุล ..." size="sm"></soft-input>
                            </div>
                            <div>
                                <div class="text-sm text-bold text-dark ">เบอร์โทรศัพท์</div>
                                <soft-input type="text" placeholder="กรุณากรอกเบอร์โทร ..." size="sm"></soft-input>
                            </div>
                            <div>
                                <div class="text-sm text-bold text-dark ">อีเมล</div>
                                <soft-input type="email" placeholder="กรุณากรอกอีเมล ..." size="sm"></soft-input>
                            </div>
                        </div>
                        <div class="row-cols-2 d-flex">
                            <div class="w-25" style="margin-right: 4.2%;">
                                <div class="text-sm text-bold text-dark ">ระยะเวลาการฝึกงานตั้งแต่วันที่</div>
                                <soft-input type="date" size="sm"></soft-input>
                            </div>
                            <div>
                                <div class="text-sm text-bold text-dark">ถึงวันที่</div>
                                <soft-input type="date" size="sm" style="width: 66.5%;"></soft-input>
                            </div>
                        </div>
                        <div class="row-cols-2 d-flex">
                            <div class="w-25" style="float: left; margin-right: 4.2%;">
                                <div class="text-sm text-bold text-dark ">ค่าตอบแทน / วัน</div>
                                <div class="w-65">
                                    <soft-checkbox class="mb-0 mr-0">มี จำนวน
                                        <soft-input class="w-50" placeholder="บาท" size="sm" style="float: right; height: 0;"></soft-input>
                                    </soft-checkbox>                                
                                    <soft-checkbox>ไม่มี</soft-checkbox>
                                </div>
                                
                            </div>
                            <div>
                                <div class="text-sm text-bold text-dark">ที่พัก</div>
                                <soft-checkbox class="mb-0">มี</soft-checkbox>
                                <soft-checkbox>ไม่มี</soft-checkbox>
                            </div>
                        </div>



                    </div>

                </div>


            </div>

        </div>

    </div>

</template>

<script>
import SoftCheckbox from "@/components/SoftCheckbox.vue";
import SoftInput from "@/components/SoftInput.vue";

export default {
    name: "Form",
    data() {
        return {

        };
    },
    components: {
        SoftCheckbox,
        SoftInput,
    },
};
</script>