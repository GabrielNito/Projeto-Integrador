import { Router } from "express";
import { ThreadsController } from "../Controllers/Threads.controller";
import { dtoValidate } from "../middlewares/dtoValidate.middleware";
import { CreateThreadsDTO } from "../Dtos/create/CreateThreadsDTO.dto";
import { auth } from "../middlewares/auth.middleware";
import { UpdateThreadDTO } from "../Dtos/update/UpdateThreadDTO.dto";

const router = Router();

const Threads = new ThreadsController();

router.get("/", Threads.getAllThreads);

router.get("/:id", Threads.getThreadById);

router.post("/", dtoValidate(CreateThreadsDTO), auth, Threads.createThread);

router.patch("/", dtoValidate(UpdateThreadDTO), auth, Threads.updateThread);

router.delete("/:id", auth, Threads.deleteThread);

export default router;
